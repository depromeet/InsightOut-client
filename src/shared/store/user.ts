import { create } from 'zustand';

import { UserInfoParams, UserState } from './types/user';

export const userStore = create<UserState>((set) => ({
  userInfo: {
    userId: 0,
    nickname: '',
    onboarding: {
      field: false,
      experience: false,
      experienceStepper: false,
      resume: false,
      collection: false,
    },
    email: '',
    imageUrl: '',
  },
  actions: {
    setUserInfo: (params: UserInfoParams) =>
      set((state) => ({
        userInfo: {
          userId: params.userId ?? state.userInfo.userId,
          nickname: params.nickname ?? state.userInfo.nickname,
          onboarding: params.onboarding ?? state.userInfo.onboarding,
          email: params.email ?? state.userInfo.email,
          imageUrl: params.imageUrl ?? state.userInfo.imageUrl,
        },
      })),
  },
}));

// State
export const useUserInfo = () => userStore((state) => state.userInfo);
export const useUserId = () => userStore((state) => state.userInfo.userId);
export const useUserNickname = () => userStore((state) => state.userInfo.nickname);
export const useUserOnboarding = () => userStore((state) => state.userInfo.onboarding);
export const useUserEmail = () => userStore((state) => state.userInfo.email);
export const useUserImageUrl = () => userStore((state) => state.userInfo.imageUrl);

// Actions
export const useUserActions = () => userStore((state) => state.actions);
