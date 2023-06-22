'use client';

import { useEffect } from 'react';
import { getCookie } from 'cookies-next';
import { useAuthActions } from '@/features/auth/store';
import authApi from '@/apis/auth';
import { usePathname } from 'next/navigation';

export default function AuthProvider({ children }: StrictPropsWithChildren) {
  const pathName = usePathname();
  const { setIsSignedIn } = useAuthActions();

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    const refreshToken = getCookie('refreshToken');
    if (accessToken) setIsSignedIn(true);

    /**
     * Access Token이 존재하지 않고 Refresh Token만 존재할 경우 Access Token 재발급
     */
    if (!accessToken && refreshToken) {
      (async () => {
        await authApi.reIssue();
      })();
      setIsSignedIn(true);
    }
  }, [pathName, setIsSignedIn]);

  return <>{children}</>;
}
