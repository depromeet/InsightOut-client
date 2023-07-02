import { UserInfo } from '@/shared/store/types/user';

/**
 * Access Token
 */
export interface AccessToken {
  accessToken: string;
}

/**
 * 회원가입 Response 응답 데이터
 */
export type SignInData = UserInfo & AccessToken;
