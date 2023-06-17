/* eslint-disable unused-imports/no-unused-vars */
import { AuthState } from '@/feature/auth/types';
import { create } from 'zustand';

const useAuthStore = create<AuthState>((set) => ({
  isSignedIn: false,
  actions: {
    setIsSignedIn: (value: boolean) => set(() => ({ isSignedIn: value })),
  },
}));

// State
export const useIsSignedIn = () => useAuthStore((state) => state.isSignedIn);

// Actions
export const useAuthActions = () => useAuthStore((state) => state.actions);
