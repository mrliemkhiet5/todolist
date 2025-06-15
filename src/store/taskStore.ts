import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { supabase } from '../lib/supabase';
import type { Task, Project, Subtask, TaskTag } from '../lib/supabase';

export interface TaskWithDetails extends Task {
  subtasks: Subtask[];
  tags: string[];
  assignee?: {
    id: string;
    name: string;
    avatar_url?: string;
  };
}

export interface ProjectWithDetails extends Project {
  tasks: TaskWithDetails[];
  members: {
    id: string;
    name: string;
    avatar_url?: string;
    role: string;
  }[];
}

interface TaskState {
  tasks: TaskWithDetails[];
  projects: ProjectWithDetails[];
  currentProject: string | null;
  viewMode: 'list' | 'kanban' | 'calendar' | 'gantt';
  isLoading: boolean;
  error: string | null;
  
  // Task actions
  fetchTasks: () => Promise<void>;
  addTask: (task: Omit<Task, 'id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  
  // Project actions
  fetchProjects: () => Promise<void>;
  addProject: (project: Omit<Project, 'id' | 'created_at' | 'updated_at' | 'owner_id'>) => Promise<void>;
  updateProject: (id: string, updates: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  setCurrentProject: (projectId: string | null) => void;
  
  // View actions
  setViewMode: (mode: 'list' | 'kanban' | 'calendar' | 'gantt') => void;
  
  // Utility actions
  clearError: () => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      tasks: [],
      projects: [],
      currentProject: null,
      viewMode: 'list',
      isLoading: false,
      error: null,

      fetchTasks: async () => {
        set({ isLoading: true, error: null });
        
        try {
          const { data: user } = await supabase.auth.getUser();
          if (!user.user) throw new Error('Not authenticated');

          // Fetch tasks with related data
          const { data: tasksData, error: tasksError } = await supabase
            .from('tasks')
            .select(`
              *,
              subtasks (*),
              task_tags (tag),
              assignee:profiles!tasks_assignee_id_fkey (id, name, avatar_url)
            `)
            .order('created_at', { ascending: false });

          if (tasksError) throw tasksError;

          // Transform the data
          const tasks: TaskWithDetails[] = (tasksData || []).map(task => ({
            ...task,
            subtasks: task.subtasks || [],
            tags: (task.task_tags || []).map((tt: any) => tt.tag),
            assignee: task.assignee || undefined,
          }));

          set({ tasks, isLoading: false });
        } catch (error: any) {
          set({ 
            error: error.message || 'Failed to fetch tasks', 
            isLoading: false 
          });
        }
      },

      addTask: async (taskData) => {
        set({ isLoading: true, error: null });
        
        try {
          const { data: user } = await supabase.auth.getUser();
          if (!user.user) throw new Error('Not authenticated');

          const { data, error } = await supabase
            .from('tasks')
            .insert({
              ...taskData,
              created_by: user.user.id,
            })
            .select()
            .single();

          if (error) throw error;

          // Refresh tasks
          await get().fetchTasks();
          set({ isLoading: false });
        } catch (error: any) {
          set({ 
            error: error.message || 'Failed to create task', 
            isLoading: false 
          });
        }
      },

      updateTask: async (id, updates) => {
        set({ isLoading: true, error: null });
        
        try {
          const { error } = await supabase
            .from('tasks')
            .update({
              ...updates,
              updated_at: new Date().toISOString(),
            })
            .eq('id', id);

          if (error) throw error;

          // Refresh tasks
          await get().fetchTasks();
          set({ isLoading: false });
        } catch (error: any) {
          set({ 
            error: error.message || 'Failed to update task', 
            isLoading: false 
          });
        }
      },

      deleteTask: async (id) => {
        set({ isLoading: true, error: null });
        
        try {
          const { error } = await supabase
            .from('tasks')
            .delete()
            .eq('id', id);

          if (error) throw error;

          // Refresh tasks
          await get().fetchTasks();
          set({ isLoading: false });
        } catch (error: any) {
          set({ 
            error: error.message || 'Failed to delete task', 
            isLoading: false 
          });
        }
      },

      fetchProjects: async () => {
        set({ isLoading: true, error: null });
        
        try {
          const { data: user } = await supabase.auth.getUser();
          if (!user.user) throw new Error('Not authenticated');

          // Fetch projects with members
          const { data: projectsData, error: projectsError } = await supabase
            .from('projects')
            .select(`
              *,
              project_members (
                role,
                user:profiles (id, name, avatar_url)
              )
            `)
            .eq('owner_id', user.user.id)
            .order('created_at', { ascending: false });

          if (projectsError) throw projectsError;

          // Transform the data
          const projects: ProjectWithDetails[] = (projectsData || []).map(project => ({
            ...project,
            tasks: [], // Will be populated when tasks are fetched
            members: (project.project_members || []).map((pm: any) => ({
              ...pm.user,
              role: pm.role,
            })),
          }));

          set({ projects, isLoading: false });

          // Set default project if none selected
          if (!get().currentProject && projects.length > 0) {
            set({ currentProject: projects[0].id });
          }
        } catch (error: any) {
          set({ 
            error: error.message || 'Failed to fetch projects', 
            isLoading: false 
          });
        }
      },

      addProject: async (projectData) => {
        set({ isLoading: true, error: null });
        
        try {
          const { data: user } = await supabase.auth.getUser();
          if (!user.user) throw new Error('Not authenticated');

          // Create project
          const { data: project, error: projectError } = await supabase
            .from('projects')
            .insert({
              ...projectData,
              owner_id: user.user.id,
            })
            .select()
            .single();

          if (projectError) throw projectError;

          // Add user as project member
          const { error: memberError } = await supabase
            .from('project_members')
            .insert({
              project_id: project.id,
              user_id: user.user.id,
              role: 'owner',
            });

          if (memberError) throw memberError;

          // Refresh projects
          await get().fetchProjects();
          set({ isLoading: false });
        } catch (error: any) {
          set({ 
            error: error.message || 'Failed to create project', 
            isLoading: false 
          });
        }
      },

      updateProject: async (id, updates) => {
        set({ isLoading: true, error: null });
        
        try {
          const { error } = await supabase
            .from('projects')
            .update({
              ...updates,
              updated_at: new Date().toISOString(),
            })
            .eq('id', id);

          if (error) throw error;

          // Refresh projects
          await get().fetchProjects();
          set({ isLoading: false });
        } catch (error: any) {
          set({ 
            error: error.message || 'Failed to update project', 
            isLoading: false 
          });
        }
      },

      deleteProject: async (id) => {
        set({ isLoading: true, error: null });
        
        try {
          const { error } = await supabase
            .from('projects')
            .delete()
            .eq('id', id);

          if (error) throw error;

          // Refresh projects
          await get().fetchProjects();
          
          // Clear current project if it was deleted
          if (get().currentProject === id) {
            set({ currentProject: null });
          }
          
          set({ isLoading: false });
        } catch (error: any) {
          set({ 
            error: error.message || 'Failed to delete project', 
            isLoading: false 
          });
        }
      },

      setCurrentProject: (projectId) => {
        set({ currentProject: projectId });
      },

      setViewMode: (mode) => {
        set({ viewMode: mode });
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'task-storage',
      partialize: (state) => ({ 
        currentProject: state.currentProject,
        viewMode: state.viewMode 
      }),
    }
  )
);