'use client';

import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useAuthActions } from '@/features/auth/store';
import authApi from '@/apis/auth';
import { usePathname } from 'next/navigation';
import instance from '@/apis';

export default function AuthProvider({ children }: StrictPropsWithChildren) {
  const pathName = usePathname();
  const { setIsSignedIn } = useAuthActions();

  useEffect(() => {
    const accessToken = instance.defaults.headers['Authorization'];
    const refreshToken = getCookie('refreshToken');
    if (accessToken) setIsSignedIn(true);

    /**
     * Access Token이 존재하지 않고 Refresh Token만 존재할 경우 Access Token 재발급
     */
    if (!accessToken && refreshToken) {
      (async () => {
        const response = await authApi.reIssue();
        const accessToken = response.accessToken;
        instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
      })();
      setIsSignedIn(true);
    }
  }, [pathName, setIsSignedIn]);

  return <>{children}</>;
}
