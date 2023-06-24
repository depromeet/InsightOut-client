import { authStore } from '@/features/auth/store';
import axios, { AxiosResponse } from 'axios';
import authApi from './auth/auth';
import { HTTP_BASE_URL } from '@/shared/constants/http';
import { isAccessTokenExpired, isRefreshTokenExpired, isTokenNotExist } from '@/shared/utils/http';

const instance = axios.create({
  baseURL: HTTP_BASE_URL,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data.data;
  },
  async (error) => {
    const { data, config: originalRequest } = error.response;
    const [statusCode, title] = [data.statusCode, data.data.title];

    /**
     * @description Access Token이 만료될 경우 Refresh Token으로 재발급하여 api 요청을 그대로 진행
     */
    if (isAccessTokenExpired(statusCode, title)) {
      await authApi.reIssue();
      return axios(originalRequest);
    }

    /**
     * @description Refresh Token까지 만료되거나 토큰이 존재하지 않을 경우 로그인 화면으로 리다이렉트
     */
    if (isRefreshTokenExpired(statusCode, title) || isTokenNotExist(statusCode, title)) {
      const { setIsTokenRequired, setIsSignedIn } = authStore.getState().actions;
      setIsTokenRequired(true);
      setIsSignedIn(false);
    }

    return Promise.reject(error);
  }
);

export default instance;
