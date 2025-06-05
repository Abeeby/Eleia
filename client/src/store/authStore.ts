import { create } from 'zustand';
import { authService } from '../services/api';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string;
  role: string;
  is_verified: boolean;
}

interface Subscription {
  id: number;
  plan_name: string;
  plan_type: string;
  credits_remaining?: number;
  end_date?: string;
  usage_stats?: {
    total_bookings: number;
    total_credits_used: number;
  };
}

interface AuthState {
  user: User | null;
  subscription: Subscription | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  
  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => void;
  fetchProfile: () => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  subscription: null,
  token: localStorage.getItem('token'),
  isLoading: false,
  isAuthenticated: !!localStorage.getItem('token'),

  login: async (email: string, password: string) => {
    set({ isLoading: true });
    try {
      const response = await authService.login(email, password);
      const { token, user } = response;
      
      localStorage.setItem('token', token);
      set({ 
        token, 
        user, 
        isAuthenticated: true,
        isLoading: false 
      });
      
      // Récupérer le profil complet
      await get().fetchProfile();
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  register: async (userData: any) => {
    set({ isLoading: true });
    try {
      const response = await authService.register(userData);
      const { token, user } = response;
      
      localStorage.setItem('token', token);
      set({ 
        token, 
        user, 
        isAuthenticated: true,
        isLoading: false 
      });
      
      // Récupérer le profil complet
      await get().fetchProfile();
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    set({ 
      user: null, 
      subscription: null,
      token: null, 
      isAuthenticated: false 
    });
  },

  fetchProfile: async () => {
    try {
      const response = await authService.getProfile();
      set({ 
        user: response.user,
        subscription: response.subscription
      });
    } catch (error) {
      // Si erreur 401, déconnecter l'utilisateur
      if ((error as any).response?.status === 401) {
        get().logout();
      }
      throw error;
    }
  },

  updateProfile: async (data: any) => {
    set({ isLoading: true });
    try {
      await authService.updateProfile(data);
      await get().fetchProfile();
      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  setToken: (token: string) => {
    localStorage.setItem('token', token);
    set({ token, isAuthenticated: true });
  },
})); 