'use client';

import { useEffect } from 'react';

import { usePathname } from 'next/navigation';

import onboardingApi from '@/apis/onboarding/onboarding';
import { useIsSignedIn } from '@/features/auth/store';
import { ROUTES } from '@/shared/constants/routes';
import { useUserActions } from '@/shared/store/user';

/**
 * 페이지 마운트 시, 온보딩을 조회하는 Provider
 * - 페이지를 새로 마운트하는 경우, 로그인 시 응답 받은 온보딩 값이 없습니다.
 *
 * - 로그인 여부와 온보딩을 사용하는 페이지인지 확인합니다.
 * - 로그인 상태에서 현재 페이지가 온보딩을 사용하는 경우, 아래 로직이 실행됩니다.
 *    - 1. 서버에 온보딩을 조회합니다.
 *    - 2. 서버로부터 응답 받은 온보딩 값을 userStore에 저장합니다.
 */
export default function OnboardingProvider({ children }: StrictPropsWithChildren) {
  const pathname = usePathname();
  const isSignedIn = useIsSignedIn();
  const { setUserInfo } = useUserActions();

  const onboardingPages = [ROUTES.EXPERIENCE, ROUTES.RESUMES];

  useEffect(() => {
    if (!isSignedIn || !onboardingPages.some((onboardingPage) => pathname.startsWith(onboardingPage))) return;

    (async () => {
      try {
        const onboarding = await onboardingApi.get();
        setUserInfo({ onboarding });
      } catch (error) {
        // FIXME: 에러 처리
        console.error(error);
      }
    })();
  });

  return <>{children}</>;
}
