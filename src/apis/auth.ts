import { AxiosResponse } from 'axios';
import instance from '.';

const authApi = {
  /**
   *
   * @param idToken 구글 Id Token
   * @description 회원가입 또는 로그인하여 accessToken 발급
   */
  signIn: (idToken: string) =>
    instance.post<string, AxiosResponse<{ accessToken: string }>>('/auth/signin', { idToken }),
  /**
   *
   * @description cookie에 담겨있는 refreshToken을 활용하여 accessToken 재발급
   */
  reIssue: () => instance.post<any, AxiosResponse<{ accessToken: string }>>('/auth/reissue'),
};

export default authApi;
