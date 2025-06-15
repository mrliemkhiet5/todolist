import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          name: string;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          name: string;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          avatar_url?: string | null;
          updated_at?: string;
        };
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          color: string;
          owner_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string;
          color?: string;
          owner_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          color?: string;
          updated_at?: string;
        };
      };
      tasks: {
        Row: {
          id: string;
          title: string;
          description: string;
          status: 'todo' | 'in-progress' | 'review' | 'done' | 'blocked';
          priority: 'low' | 'medium' | 'high' | 'critical';
          start_date: string | null;
          due_date: string | null;
          assignee_id: string | null;
          project_id: string;
          progress: number;
          created_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string;
          status?: 'todo' | 'in-progress' | 'review' | 'done' | 'blocked';
          priority?: 'low' | 'medium' | 'high' | 'critical';
          start_date?: string | null;
          due_date?: string | null;
          assignee_id?: string | null;
          project_id: string;
          progress?: number;
          created_by: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          status?: 'todo' | 'in-progress' | 'review' | 'done' | 'blocked';
          priority?: 'low' | 'medium' | 'high' | 'critical';
          start_date?: string | null;
          due_date?: string | null;
          assignee_id?: string | null;
          progress?: number;
          updated_at?: string;
        };
      };
      subtasks: {
        Row: {
          id: string;
          task_id: string;
          title: string;
          completed: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          task_id: string;
          title: string;
          completed?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          completed?: boolean;
        };
      };
      task_tags: {
        Row: {
          id: string;
          task_id: string;
          tag: string;
        };
        Insert: {
          id?: string;
          task_id: string;
          tag: string;
        };
        Update: {
          id?: string;
          tag?: string;
        };
      };
    };
  };
}

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Project = Database['public']['Tables']['projects']['Row'];
export type Task = Database['public']['Tables']['tasks']['Row'];
export type Subtask = Database['public']['Tables']['subtasks']['Row'];
export type TaskTag = Database['public']['Tables']['task_tags']['Row'];