'use client';

import { useRouter } from 'next/navigation';

import userApi from '@/apis/user/user';
import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import AuthModal from '@/features/auth/components/AuthModal/AuthModal';
import AuthProvider from '@/features/auth/components/Providers/AuthProvider';
import { useAuthActions, useIsOpenSignUpModal, useIsRequesting, useIsSignedIn } from '@/features/auth/store';
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
    router.replace('/');
  };

  const handleAbortSignUp = async () => {
    await userApi.patch({ nickname, field: null });
    setIsSignedIn(true);
  };

  return (
    <>
      <AuthProvider>
        <GlobalNavigationBar isSignedIn={isSignedIn} isRequesting={isRequesting} />
        {children}
      </AuthProvider>
      <AuthModal isOpen={isOpenSignUpModal} onClose={handleClickCloseButton} onAbortSignUp={handleAbortSignUp} />
    </>
  );
}
