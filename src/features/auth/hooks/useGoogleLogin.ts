'use client';

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import authApi from '@/apis/auth/auth';
import { useIsSignedIn } from '../store';
import { useRouter } from 'next/navigation';
import { useUserActions } from '@/shared/store/user';
import { useState } from 'react';
import userApi from '@/apis/user/user';

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
  const { setUserInfo } = useUserActions();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signIn = async () => {
    setIsLoading(true);
    try {
      const firebaseResponse = await signInWithPopup(auth, provider);
      const idToken = await firebaseResponse.user.getIdToken();
      const { userId, nickname, onboarding } = await authApi.signIn(idToken);
      const { imageUrl, email } = await userApi.get();
      const userInfo = { userId, nickname, onboarding, email, imageUrl };
      setUserInfo(userInfo);
      setIsLoading(false);
      router.push('/?steps=welcome');
    } catch (error) {
      setIsLoading(false);
    }
  };

  const signOut = () => auth.signOut();

  return {
    signIn,
    signOut,
    isSignedIn,
    isLoading,
  };
};

export default useGoogleLogin;
