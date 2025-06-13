import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';
import type { Profile } from '../lib/supabase';

interface AuthState {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  fetchProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      profile: null,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: email.trim().toLowerCase(),
            password,
          });

          if (error) {
            throw new Error(error.message);
          }

          if (data.user) {
            set({ user: data.user });
            await get().fetchProfile();
          }
          
          set({ isLoading: false });
        } catch (error: any) {
          console.error('Login error:', error);
          set({ 
            error: error.message || 'Login failed. Please check your credentials.', 
            isLoading: false 
          });
        }
      },

      signup: async (name: string, email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        try {
          // Validate inputs
          if (!name.trim()) {
            throw new Error('Name is required');
          }
          if (!email.trim()) {
            throw new Error('Email is required');
          }
          if (password.length < 6) {
            throw new Error('Password must be at least 6 characters');
          }

          const { data, error } = await supabase.auth.signUp({
            email: email.trim().toLowerCase(),
            password,
            options: {
              data: {
                name: name.trim(),
                full_name: name.trim(),
              },
            },
          });

          if (error) {
            throw new Error(error.message);
          }

          if (data.user) {
            set({ user: data.user });
            
            // Wait a moment for the trigger to create the profile
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Try to fetch the profile, create it manually if it doesn't exist
            try {
              await get().fetchProfile();
            } catch (profileError) {
              console.warn('Profile not found, creating manually:', profileError);
              
              // Create profile manually if trigger failed
              const { error: profileCreateError } = await supabase
                .from('profiles')
                .insert({
                  id: data.user.id,
                  email: data.user.email!,
                  name: name.trim(),
                });
              
              if (profileCreateError) {
                console.warn('Manual profile creation failed:', profileCreateError);
              } else {
                await get().fetchProfile();
              }
            }
          }
          
          set({ isLoading: false });
        } catch (error: any) {
          console.error('Signup error:', error);
          set({ 
            error: error.message || 'Signup failed. Please try again.', 
            isLoading: false 
          });
        }
      },

      logout: async () => {
        try {
          await supabase.auth.signOut();
          set({ user: null, profile: null, error: null });
        } catch (error: any) {
          console.error('Logout error:', error);
          set({ error: error.message || 'Logout failed' });
        }
      },

      fetchProfile: async () => {
        const { user } = get();
        if (!user) return;

        try {
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (error) {
            if (error.code === 'PGRST116') {
              // Profile doesn't exist, this is expected for new users
              console.log('Profile not found for user:', user.id);
              return;
            }
            throw error;
          }

          set({ profile: data });
        } catch (error: any) {
          console.error('Error fetching profile:', error);
          // Don't set error state for profile fetch failures
        }
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        user: state.user,
        profile: state.profile 
      }),
    }
  )
);

// Initialize auth state
supabase.auth.onAuthStateChange(async (event, session) => {
  const { fetchProfile } = useAuthStore.getState();
  
  if (event === 'SIGNED_IN' && session?.user) {
    useAuthStore.setState({ user: session.user });
    await fetchProfile();
  } else if (event === 'SIGNED_OUT') {
    useAuthStore.setState({ user: null, profile: null });
  }
});