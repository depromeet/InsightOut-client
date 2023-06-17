'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useAuthActions } from '@/features/auth/store';
import authApi from '@/apis/auth';

export default function AuthProvider({ children }: StrictPropsWithChildren) {
  const { setIsSignedIn } = useAuthActions();

  useEffect(() => {
    const accessToken = axios.defaults.headers['Authorization'];
    const refreshToken = getCookie('refreshToken');
    if (accessToken && refreshToken) setIsSignedIn(true);
    if (accessToken || !refreshToken) return;

    (async () => {
      const response = await authApi.reIssue();
      const accessToken = response.data.accessToken;
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
      setIsSignedIn(true);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
}
