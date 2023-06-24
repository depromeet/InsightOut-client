/**
 * Access Token
 */
export interface AccessToken {
  accessToken: string;
}

/**
 * 회원가입 Response 응답 데이터
 */
export interface SignInData extends AccessToken {
  onboarding: {
    collection: boolean;
    experience: boolean;
    experienceStepper: boolean;
    resume: boolean;
  };
}
