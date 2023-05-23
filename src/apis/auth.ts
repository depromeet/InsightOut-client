import { AxiosResponse } from 'axios';
import instance from '.';

const authApi = {
  signIn: (idToken: string) =>
    instance.post<string, AxiosResponse<{ accessToken: string }>>('/auth/signin', { idToken }),
  reIssue: () => instance.post<any, AxiosResponse<{ accessToken: string }>>('/auth/reissue'),
};

export default authApi;
