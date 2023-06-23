'use client';

import { useEffect } from 'react';
import { useAuthActions, useIsSignedIn, useIsTokenRequired } from '@/features/auth/store';
import authApi from '@/apis/auth';
import { useRouter } from 'next/navigation';
import { isAxiosError } from 'axios';
import { InsightOutResponseError } from '@/shared/@types/data/api';
import { isRefreshTokenExpired, isTokenNotExist } from '@/shared/utils/http';

export default function AuthProvider({ children }: StrictPropsWithChildren) {
  const router = useRouter();
  const isSignedIn = useIsSignedIn();
  const isTokenRequired = useIsTokenRequired();
  const { setIsSignedIn, setIsTokenRequired } = useAuthActions();

  useEffect(() => {
    if (isSignedIn) return;
    /**
     * 토큰이 없는 경우 홈으로 리다이렉트
     */
    if (isTokenRequired) {
      router.replace('/');
      return;
    }
  }, [isSignedIn, isTokenRequired, router]);

  useEffect(() => {
    if (isSignedIn) return;

    (async () => {
      try {
        /**
         * Access Token이 존재하지 않을 경우 재발급
         */
        await authApi.reIssue();
        setIsSignedIn(true);
      } catch (error) {
        if (isAxiosError(error)) {
          const err = error as InsightOutResponseError;
          const statusCode = err.response?.status as number;
          const errorData = err.response?.data.data;
          const title = errorData?.title as string;

          /**
           * Refresh Token이 만료되었거나 모든 토큰이 존재하지 않을 경우 홈으로 리다이렉트
           */
          if (isRefreshTokenExpired(statusCode, title) || isTokenNotExist(statusCode, title)) {
            setIsTokenRequired(true);
          }
        }
      }
    })();
  }, [isSignedIn, setIsSignedIn, setIsTokenRequired]);

  return <>{children}</>;
}
