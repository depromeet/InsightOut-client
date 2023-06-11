'use client';

import { useEffect } from 'react';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import authApi from '@/apis/auth';
import { useAuthStore } from '@/feature/auth/store/auth.store';

export default function AuthProvider({ children }: StrictPropsWithChildren) {
  const { setIsSignedIn } = useAuthStore();

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
