import { StateCreator } from 'zustand';
import { AuthState } from './auth.type';

export const createAuthSlice: StateCreator<AuthState> = (set) => ({
  isSignedIn: false,
  setIsSignedIn: (value: boolean) => set(() => ({ isSignedIn: value })),
});
