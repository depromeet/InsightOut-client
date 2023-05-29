import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import axios, { AxiosError } from 'axios';
import authApi from '@/apis/auth';
import { firebaseConfig } from '@/services/constants/firebase';

const useGoogleLogin = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    const response = await signInWithPopup(auth, provider);
    const idToken = await response.user.getIdToken();

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

  const signOut = () => auth.signOut();

  return {
    signIn,
    signOut,
  };
};

export default useGoogleLogin;
