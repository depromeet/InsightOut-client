/* eslint-disable unused-imports/no-unused-vars */
import { create } from 'zustand';
import { AuthState } from '../types/store';

export const authStore = create<AuthState>((set) => ({
  isSignedIn: false,
  isTokenRequired: false,
  actions: {
    setIsSignedIn: (value: boolean) => set(() => ({ isSignedIn: value })),
    setIsTokenRequired: (value: boolean) => set(() => ({ isTokenRequired: value })),
  },
}));

// State
export const useIsSignedIn = () => authStore((state) => state.isSignedIn);
export const useIsTokenRequired = () => authStore((state) => state.isTokenRequired);

// Actions
export const useAuthActions = () => authStore((state) => state.actions);
