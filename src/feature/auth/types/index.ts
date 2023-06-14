/* eslint-disable unused-imports/no-unused-vars */
export interface AuthActions {
  /**
   * 로그인 되어있는지 여부를 설정하는 함수
   */
  setIsSignedIn: (value: boolean) => void;
}

export interface AuthState {
  /**
   * 로그인 되어있는지 여부
   */
  isSignedIn: boolean;
  /**
   * Action 함수
   */
  actions: AuthActions;
}
