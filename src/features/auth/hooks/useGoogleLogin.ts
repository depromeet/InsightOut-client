'use client';

import { useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import authApi from '@/apis/auth/auth';
import { UserInfo } from '@/shared/store/types/user';
import { useUserActions } from '@/shared/store/user';

import { useIsSignedIn } from '../store';

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
      const response = await authApi.signIn(idToken);
      const userInfo: UserInfo = {
        userId: response.userId,
        nickname: response.nickname,
        onboarding: response.onboarding,
      };
      setIsLoading(false);
      setUserInfo(userInfo);
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
