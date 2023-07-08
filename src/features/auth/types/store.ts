/* eslint-disable unused-imports/no-unused-vars */

import { Field } from '@/shared/constants/user';

/**
 * Auth 관련 zustand actions
 */
export interface AuthActions {
  /**
   * 로그인 되어있는지 여부를 설정하는 함수
   */
  setIsSignedIn: (value: boolean) => void;
  /**
   * 토큰이 필요한지 여부를 설정하는 함수
   */
  setIsTokenRequired: (value: boolean) => void;
  /**
   * 토큰 관련 요청이 진행 중인지 여부를 설정하는 함수
   */
  setIsRequesting: (value: boolean) => void;
  /**
   * 회원가입 모달 트리거 함수
   */
  setIsOpenSignUpModal: (value: boolean) => void;
}

/**
 * Auth 관련 zustand state
 */
export interface AuthState {
  /**
   * 토큰이 필요한지 여부
   */
  isTokenRequired: boolean;
  /**
   * 로그인 되어있는지 여부
   */
  isSignedIn: boolean;
  /**
   * 토큰 관련 요청이 진행 중인지 여부 (스피너 출력)
   */
  isRequesting: boolean;
  /**
   * 회원가입 모달 트리거 값
   */
  isOpenSignUpModal: boolean;
  /**
   * Action 함수
   */
  actions: AuthActions;
}

export type Category = { title: string; field: Field };

export type AuthModalSize = 'md' | 'xl' | '5xl';

export type SignUpSteps = 'signUp' | 'welcome' | 'categories' | 'startnow';

export type SignUpConfig = {
  [key in SignUpSteps]: { modalSize: AuthModalSize; contents: JSX.Element };
};
