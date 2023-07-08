/* eslint-disable unused-imports/no-unused-vars */
'use client';

import { useState } from 'react';

import { Route } from 'next';
import { useRouter, useSearchParams } from 'next/navigation';

import onboardingApi from '@/apis/onboarding/onboarding';
import userApi from '@/apis/user/user';
import Modal from '@/components/Modal/Modal';
import Spinner from '@/components/Spinner/Spinner';
import CategoriesContents from '@/features/auth/components/AuthModal/ModalContents/CategoriesContents';
import SignUpContents from '@/features/auth/components/AuthModal/ModalContents/SignUpContents';
import StartNowContents from '@/features/auth/components/AuthModal/ModalContents/StartNowContents';
import WelcomeContents from '@/features/auth/components/AuthModal/ModalContents/WelcomeContents';
import { ROUTES } from '@/shared/constants/routes';
import { useUserNickname, useUserOnboarding } from '@/shared/store/user';

import useGoogleLogin from '../../hooks/useGoogleLogin';
import { useAuthActions } from '../../store';
import { Category, SignUpConfig, SignUpSteps } from '../../types/signUp';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAbortSignUp: () => void;
};

const AuthModal = ({ isOpen, onClose, onAbortSignUp }: AuthModalProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const nickname = useUserNickname();
  const onboarding = useUserOnboarding();
  const { setIsSignedIn, setIsTokenRequired } = useAuthActions();
  const { signIn, isLoading } = useGoogleLogin();

  const [selectedCategory, setSelectedCategory] = useState<Category>({ title: '', field: null });

  const currentStep = searchParams.get('steps') as SignUpSteps | null;

  const handleCloseModal = () => {
    const isLastStep = !!searchParams.get('startnow');
    if (!isLastStep) onAbortSignUp();
    onClose();
  };

  /**
   * 회원가입 성공 시 핸들러
   */
  const handleSignUpSuccess = () => {
    setIsSignedIn(true);
    setIsTokenRequired(false);
    onClose();
    router.push(ROUTES.EXPERIENCE as Route);
  };

  /**
   * 직무 선택 핸들러
   */
  const handleChooseJob = async () => {
    await onboardingApi.patch({ field: true });
    await userApi.patch({ nickname, field: selectedCategory.field });
    router.push('/?steps=startnow');
  };

  /**
   * 만나서 반가워요 버튼 클릭 핸들러
   */
  const handleClickGreeting = () => {
    if (onboarding.field) {
      setIsSignedIn(true);
      onClose();
    } else {
      router.push('/?steps=categories');
    }
  };

  const SIGN_UP_STEPS: SignUpConfig = {
    signUp: {
      modalSize: 'md',
      contents: <SignUpContents signIn={signIn} />,
    },
    welcome: {
      modalSize: 'xl',
      contents: <WelcomeContents nickname={nickname} onClickButton={handleClickGreeting} />,
    },
    categories: {
      modalSize: '5xl',
      contents: (
        <CategoriesContents
          nickname={nickname}
          selectedCategory={selectedCategory}
          onClickLeftButton={() => router.back()}
          onClickCategory={setSelectedCategory}
          onClickRightButton={handleChooseJob}
        />
      ),
    },
    startnow: {
      modalSize: '5xl',
      contents: <StartNowContents onClickLeftButton={() => router.back()} onClickRightButton={handleSignUpSuccess} />,
    },
  } as const;

  const getSignUpConfig = () => {
    if (!currentStep) return { modalSize: 'md', contents: <Spinner size="L" style="primary500" /> };
    return { modalSize: SIGN_UP_STEPS[currentStep].modalSize, contents: SIGN_UP_STEPS[currentStep].contents };
  };

  return (
    <Modal size={getSignUpConfig().modalSize} isOpen={isOpen} onClose={handleCloseModal}>
      {isLoading ? <Spinner size="L" style="primary500" /> : getSignUpConfig().contents}
    </Modal>
  );
};

export default AuthModal;
