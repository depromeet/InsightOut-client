import axios, { AxiosResponse } from 'axios';
import authApi from './auth';
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
    const [statusCode, title, message] = [data.statusCode, data.data.title, data.data.message];

    /**
     * @description Access Token이 만료될 경우 Refresh Token으로 재발급합니다.
     */
    if (isAccessTokenExpired(statusCode, title, message)) {
      await authApi.reIssue();
      return axios(originalRequest);
    }

    /**
     * @description Refresh Token까지 만료될 경우 로그인 화면으로 이동합니다.
     */
    if (isRefreshTokenExpired(statusCode, title, message) || isTokenNotExist(statusCode, title, message)) {
      if (typeof window !== 'undefined') {
        window.location.href = '/';
      }
      return Promise.reject(error);
    }
  }
);

export default instance;
