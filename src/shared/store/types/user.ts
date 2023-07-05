/* eslint-disable unused-imports/no-unused-vars */

/**
 * 유저 온보딩 수행 여부
 */
export interface OnboardingInfo {
  /**
   * 직무 선택 여부
   */
  field: boolean;
  experience: boolean;
  experienceStepper: boolean;
  resume: boolean;
  collection: boolean;
}

/**
 * 유저 정보
 */
export interface UserInfo {
  userId: number;
  nickname: string;
  onboarding: OnboardingInfo;
  email: string;
  imageUrl: string;
}

/**
 * 유저 정보 업데이트 Params
 */
export type UserInfoParams = Partial<UserInfo>;

/**
 * 유저 관련 zustand actions
 */
interface UserActions {
  /**
   * 유저 정보를 저장하는 함수
   */
  setUserInfo: (userInfo: UserInfoParams) => void;
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
