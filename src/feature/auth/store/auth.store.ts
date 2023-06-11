import { create } from 'zustand';
import { AuthState } from './auth.type';
import { createAuthSlice } from './auth.slice';

export const useAuthStore = create<AuthState>()((...args) => ({
  ...createAuthSlice(...args),
}));
