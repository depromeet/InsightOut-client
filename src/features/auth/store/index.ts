/* eslint-disable unused-imports/no-unused-vars */
import { create } from 'zustand';

import { AuthState } from '../types/store';

export const authStore = create<AuthState>((set) => ({
  isSignedIn: false,
  isTokenRequired: false,
  isRequesting: true,
  actions: {
    setIsSignedIn: (value: boolean) => set(() => ({ isSignedIn: value })),
    setIsTokenRequired: (value: boolean) => set(() => ({ isTokenRequired: value })),
    setIsRequesting: (value: boolean) => set(() => ({ isRequesting: value })),
  },
}));

// State
export const useIsSignedIn = () => authStore((state) => state.isSignedIn);
export const useIsTokenRequired = () => authStore((state) => state.isTokenRequired);
export const useIsRequesting = () => authStore((state) => state.isRequesting);

// Actions
export const useAuthActions = () => authStore((state) => state.actions);
