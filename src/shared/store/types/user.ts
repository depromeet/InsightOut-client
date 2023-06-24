/* eslint-disable unused-imports/no-unused-vars */

export interface UserOnboardingInfo {
  experience: boolean;
  experienceStepper: boolean;
  resume: boolean;
  collection: boolean;
}

export interface UserInfo {
  userId: number;
  nickname: string;
  onboarding: UserOnboardingInfo;
}

/**
 * 유저 관련 zustand actions
 */
export interface UserActions {
  /**
   * 유저 정보를 저장하는 함수
   */
  setUserInfo: (userInfo: UserInfo) => void;
}

/**
 * 유저 관련 zustand state
 */
export interface UserState {
  /**
   * 유저 정보
   */
  userInfo: UserInfo;
  /**
   * Action 함수
   */
  actions: UserActions;
}
