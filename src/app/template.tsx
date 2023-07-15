'use client';

import { useRouter } from 'next/navigation';

import userApi from '@/apis/user/user';
import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import OnboardingProvider from '@/components/Providers/OnboardingProvider';
import AuthProvider from '@/features/auth/components/Providers/AuthProvider';
import { useAuthActions, useIsOpenSignUpModal, useIsRequesting, useIsSignedIn } from '@/features/auth/store';
import { ROUTES } from '@/shared/constants/routes';
import { Field } from '@/shared/constants/user';
import { useUserNickname } from '@/shared/store/user';

export default function Template({ children }: StrictPropsWithChildren) {
  const isSignedIn = useIsSignedIn();
  const isRequesting = useIsRequesting();
  const isOpenSignUpModal = useIsOpenSignUpModal();
  const nickname = useUserNickname();
  const { setIsOpenSignUpModal, setIsSignedIn } = useAuthActions();
  const router = useRouter();

  const handleClickCloseButton = () => {
    setIsOpenSignUpModal(false);
    router.replace(ROUTES.HOME);
  };

  const handleAbortSignUp = async () => {
    await userApi.patch({ nickname, field: Field.NOT_SELECTED });
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
