/* eslint-disable unused-imports/no-unused-vars */

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
  setIsRequesting: (value: boolean) => void;
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
  isRequesting: boolean;
  /**
   * Action 함수
   */
  actions: AuthActions;
}
