'use client';

import { useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import authApi from '@/apis/auth/auth';
import { UserInfo } from '@/shared/store/types/user';
import { useUserActions } from '@/shared/store/user';

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
  const { setUserInfo } = useUserActions();
  const router = useRouter();
  const [googleIdToken, setGoogleIdToken] = useState<string>('');

  const signIn = async () => {
    const firebaseResponse = await signInWithPopup(auth, provider);
    const idToken = await firebaseResponse.user.getIdToken();
    setGoogleIdToken(idToken);
    const response = await authApi.signIn(idToken);
    const userInfo: UserInfo = {
      userId: response.userId,
      nickname: response.nickname,
      onboarding: response.onboarding,
    };
    setUserInfo(userInfo);
    router.push('/?steps=welcome');

    // setIsSignedIn(true);
    // setIsTokenRequired(false);
  };

  const signOut = () => auth.signOut();

  return {
    signIn,
    signOut,
    isSignedIn,
  };
};

export default useGoogleLogin;
