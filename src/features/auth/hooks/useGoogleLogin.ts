'use client';

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import authApi from '@/apis/auth';
import { useAuthActions, useIsSignedIn } from '../store';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
} as const;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useGoogleLogin = () => {
  const isSignedIn = useIsSignedIn();
  const { setIsSignedIn, setIsTokenRequired } = useAuthActions();

  const signIn = async () => {
    const response = await signInWithPopup(auth, provider);
    const idToken = await response.user.getIdToken();
    await authApi.signIn(idToken);
    setIsSignedIn(true);
    setIsTokenRequired(false);
  };

  const signOut = () => auth.signOut();

  return {
    signIn,
    signOut,
    isSignedIn,
  };
};

export default useGoogleLogin;
