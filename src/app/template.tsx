'use client';

import { useEffect } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';

import userApi from '@/apis/user/user';
import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import OnboardingProvider from '@/components/Providers/OnboardingProvider';
import ExperienceNotice from '@/features/analyze/modal/BaseDialog';
import AuthProvider from '@/features/auth/components/Providers/AuthProvider';
import { useAuthActions, useIsOpenSignUpModal, useIsRequesting, useIsSignedIn } from '@/features/auth/store';
import { ROUTES } from '@/shared/constants/routes';
import { Field } from '@/shared/constants/user';
import { useBoolean } from '@/shared/store/boolean';
import { useUserNickname } from '@/shared/store/user';

export default function Template({ children }: StrictPropsWithChildren) {
  const isSignedIn = useIsSignedIn();
  const isRequesting = useIsRequesting();
  const isOpenSignUpModal = useIsOpenSignUpModal();
  const nickname = useUserNickname();
  const { setIsOpenSignUpModal, setIsSignedIn } = useAuthActions();
  const router = useRouter();
  const pathname = usePathname();

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

  const handleAbortSignUp = async () => {
    await userApi.patch({ nickname, field: Field.NOT_SELECTED });
    setIsSignedIn(true);
  };

  useEffect(() => {
    // 경험분해 페이지 -> 경험카드 완성페이지로 라우팅시에는 notice 모달 띄우지 않도록 예외처리
    if (pathname === '/completed-experience-card') {
      setTimeout(() => {
        setNoticeOpen(false);
      }, 0);
      return;
    }

    // 경험분해 페이지 이탈시에 notice 모달 띄우기
    if (isNoticeOpen) experienceNoticeOpen();
  }, [isNoticeOpen, experienceNoticeOpen, pathname, setNoticeOpen]);

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
