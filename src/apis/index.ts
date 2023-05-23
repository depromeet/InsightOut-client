import axios from 'axios';
import authApi from './auth';

/**
 * @description CORS 등의 이슈로 인해 로컬 서버 주소로 임시 대체합니다.
 */
const instance = axios.create({
  // baseURL: 'http://insight-out-eb-instance-env.eba-wiaanpdd.ap-northeast-2.elasticbeanstalk.com',
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { data, config: originalRequest } = error.response;

    /**
     * @description Access Token이 만료될 경우 Refresh Token으로 재발급합니다.
     */
    if (data.statusCode === 401) {
      if (data.statusCode === 401 && data.message === 'Unauthorized') {
        const response = await authApi.reIssue();
        const accessToken = response.data.accessToken;
        axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        return axios(originalRequest);
      }
    }

    /**
     * @description Refresh Token까지 만료될 경우 로그인 화면으로 이동합니다.
     */
    if (data.statusCode === 401 && data.message === '적절하지 않은 요청입니다.') {
      // window.location.href = '/signin';
      return Promise.reject(error);
    }
  }
);

export default instance;
