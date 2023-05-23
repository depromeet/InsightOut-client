import authApi from '@/apis/auth';
import axios, { AxiosError } from 'axios';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

type Result = GoogleLoginResponse | GoogleLoginResponseOffline;

export default function useGoogleLogin() {
  const onSuccess = async (result: Result) => {
    const loginResult = result as GoogleLoginResponse;
    const idToken = loginResult.getAuthResponse().id_token;

    try {
      const response = await authApi.signIn(idToken);
      const accessToken = response.data.accessToken;
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
      }
    }
  };

  const onFailure = (error: any) => {
    console.log(error);
  };

  return {
    onSuccess,
    onFailure,
  };
}
