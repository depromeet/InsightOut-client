import axios, { AxiosResponse } from 'axios';
import authApi from './auth';
import { HTTP_BASE_URL, HTTP_STATUS_CODE } from '@/shared/constants/http';

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

    /**
     * @description Access Token이 만료될 경우 Refresh Token으로 재발급합니다.
     */
    if (data.statusCode === HTTP_STATUS_CODE.UNAUTHORIZED && data.message === 'Unauthorized') {
      const response = await authApi.reIssue();
      const accessToken = response.accessToken;
      instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
      return axios(originalRequest);
    }

    /**
     * @description Refresh Token까지 만료될 경우 로그인 화면으로 이동합니다.
     */
    if (data.statusCode === HTTP_STATUS_CODE.UNAUTHORIZED && data.message === '적절하지 않은 요청입니다.') {
      // window.location.href = '/signin';
      return Promise.reject(error);
    }
  }
);

export default instance;
