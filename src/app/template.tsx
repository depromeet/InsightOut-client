'use client';

import { useEffect } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import OnboardingProvider from '@/components/Providers/OnboardingProvider';
import ExperienceNotice from '@/feature/analyze/modal/BaseDialog';
import AuthProvider from '@/features/auth/components/Providers/AuthProvider';
import { useAuthActions, useIsOpenSignUpModal, useIsRequesting, useIsSignedIn } from '@/features/auth/store';
import { ROUTES } from '@/shared/constants/routes';
import { useBoolean } from '@/shared/store/boolean';
import { useUserId } from '@/shared/store/user';

export default function Template({ children }: StrictPropsWithChildren) {
  const isSignedIn = useIsSignedIn();
  const isRequesting = useIsRequesting();
  const isOpenSignUpModal = useIsOpenSignUpModal();
  const userId = useUserId();
  const { setIsOpenSignUpModal, setIsSignedIn } = useAuthActions();
  const router = useRouter();

  const {
    isOpen: isexperienceNoticeOpen,
    onOpen: experienceNoticeOpen,
    onClose: experienceNoticeClose,
  } = useDisclosure();

  const { value: isNoticeOpen, setValue: setNoticeOpen } = useBoolean();

  const handleClickCloseButton = () => {
    setIsOpenSignUpModal(false);
    router.replace(ROUTES.HOME);
  };

  const handleAbortSignUp = () => {
    if (!userId) return;
    setIsSignedIn(true);
  };

  useEffect(() => {
    if (isNoticeOpen) {
      experienceNoticeOpen();
    }
  }, [isNoticeOpen, experienceNoticeOpen]);

  return (
    <>
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
      <ExperienceNotice
        size="3xl"
        isOpen={isexperienceNoticeOpen}
        onClose={() => {
          setNoticeOpen(false);
          experienceNoticeClose();
        }}
        title={`지금까지 작성한 내용은\n모아보기 탭에서 확인할 수 있어요`}
        textContent="확인했어요"
        closeOnOverlayClick={false}
        closeOnEsc={false}
      />
    </>
  );
}
