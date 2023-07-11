'use client';

import { useRouter } from 'next/navigation';

import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import OnboardingProvider from '@/components/Providers/OnboardingProvider';
import AuthProvider from '@/features/auth/components/Providers/AuthProvider';
import { useAuthActions, useIsOpenSignUpModal, useIsRequesting, useIsSignedIn } from '@/features/auth/store';
import { ROUTES } from '@/shared/constants/routes';
import { useUserId } from '@/shared/store/user';

export default function Template({ children }: StrictPropsWithChildren) {
  const isSignedIn = useIsSignedIn();
  const isRequesting = useIsRequesting();
  const isOpenSignUpModal = useIsOpenSignUpModal();
  const userId = useUserId();
  const { setIsOpenSignUpModal, setIsSignedIn } = useAuthActions();
  const router = useRouter();

  const handleClickCloseButton = () => {
    setIsOpenSignUpModal(false);
    router.replace(ROUTES.HOME);
  };

  const handleAbortSignUp = () => {
    if (!userId) return;
    setIsSignedIn(true);
  };

  return (
    <AuthProvider>
      <GlobalNavigationBar
        isSignedIn={isSignedIn}
        isRequesting={isRequesting}
        isOpenSignUpModal={isOpenSignUpModal}
        onCloseAuthModal={handleClickCloseButton}
        onAbortSignUp={handleAbortSignUp}
      />
      <OnboardingProvider>{children}</OnboardingProvider>
    </AuthProvider>
  );
}
