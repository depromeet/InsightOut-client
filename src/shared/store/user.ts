import { create } from 'zustand';

import { Field } from '../constants/user';
import { UserInfoParams, UserState } from './types/user';

export const userStore = create<UserState>((set) => ({
  userInfo: {
    userId: 0,
    nickname: '',
    onboarding: {
      field: false,
      experience: false,
      experienceStepper: false,
      resume: true,
      collection: false,
    },
    email: '',
    imageUrl: '',
    field: Field.NOT_SELECTED,
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
          field: params.field ?? state.userInfo.field,
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
export const useUserField = () => userStore((state) => state.userInfo.field);

// Actions
export const useUserActions = () => userStore((state) => state.actions);
