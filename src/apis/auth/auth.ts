import instance from '..';
import { AUTH_API } from '@/features/auth/constants/api';
import { AccessToken, SignInData } from './types/auth';

const authApi = {
  /**
   *
   * @param idToken 구글 Id Token
   * @description 회원가입 또는 로그인하여 accessToken 발급
   */
  signIn: (idToken: string) => instance.post<string, SignInData>(AUTH_API.SIGN_IN, { idToken }),
  /**
   *
   * @description cookie에 담겨있는 refreshToken을 활용하여 accessToken 재발급
   */
  reIssue: () => instance.post<unknown, AccessToken>(AUTH_API.REISSUE),
  /**
   *
   * @description refreshToken을 전달하여 회원 탈퇴
   */
  withdraw: () => instance.delete(AUTH_API.WITHDRAW),
};

export default authApi;
