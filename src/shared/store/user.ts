import { create } from 'zustand';

import { UserInfo, UserState } from './types/user';

export const userStore = create<UserState>((set) => ({
  userInfo: {
    userId: 0,
    nickname: '',
    onboarding: {
      experience: false,
      experienceStepper: false,
      resume: false,
      collection: false,
    },
  },
  actions: {
    setUserInfo: (userInfo: UserInfo) => set(() => ({ userInfo })),
  },
}));

// State
export const useUserInfo = () => userStore((state) => state.userInfo);

// Actions
export const useUserActions = () => userStore((state) => state.actions);
