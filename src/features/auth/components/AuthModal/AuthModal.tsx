'use client';

import { useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import userApi from '@/apis/user/user';
import Modal from '@/components/Modal/Modal';
import Spinner from '@/components/Spinner/Spinner';
import CategoriesContents from '@/features/auth/components/AuthModal/ModalContents/CategoriesContents';
import SignUpContents from '@/features/auth/components/AuthModal/ModalContents/SignUpContents';
import StartNowContents from '@/features/auth/components/AuthModal/ModalContents/StartNowContents';
import WelcomeContents from '@/features/auth/components/AuthModal/ModalContents/WelcomeContents';
import { Field } from '@/shared/constants/user';
import { useUserInfo } from '@/shared/store/user';

import useGoogleLogin from '../../hooks/useGoogleLogin';
import { useAuthActions } from '../../store';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAbortSignUp: () => void;
};

const AuthModal = ({ isOpen, onClose, onAbortSignUp }: AuthModalProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { nickname } = useUserInfo();
  const { setIsSignedIn, setIsTokenRequired } = useAuthActions();
  const { signIn, isLoading } = useGoogleLogin();

  const [selectedCategory, setSelectedCategory] = useState<{ title: string; field: Field }>({ title: '', field: null });

  const handleCloseModal = () => {
    const isLastStep = !!searchParams.get('startnow');
    if (!isLastStep) onAbortSignUp();
    onClose();
  };

  const handleSignUpSuccess = () => {
    setIsSignedIn(true);
    setIsTokenRequired(false);
    onClose();
  };

  const handleChooseJob = async () => {
    /**
     * @TODO patch api/onboarding 에 field 추가 작업 완료되면 전송 로직 추가
     */
    await userApi.patch({ nickname, field: selectedCategory.field });
    router.push('/?steps=startnow');
  };

  const modalSize = () => {
    const steps = searchParams.get('steps');

    switch (steps) {
      case 'signUp':
        return 'md';
      case 'welcome':
        return 'xl';
      case 'categories':
      case 'startnow':
        return '5xl';
    }
  };

  const renderContents = () => {
    const steps = searchParams.get('steps');

    switch (steps) {
      case 'signUp':
        return <SignUpContents signIn={signIn} />;
      case 'welcome':
        return <WelcomeContents nickname={nickname} onClickButton={() => router.push('/?steps=categories')} />;
      case 'categories':
        return (
          <CategoriesContents
            nickname={nickname}
            selectedCategory={selectedCategory}
            onClickLeftButton={() => router.back()}
            onClickCategory={setSelectedCategory}
            onClickRightButton={handleChooseJob}
          />
        );
      case 'startnow':
        return <StartNowContents onClickLeftButton={() => router.back()} onClickRightButton={handleSignUpSuccess} />;
    }
  };
  return (
    <Modal size={modalSize()} isOpen={isOpen} onClose={handleCloseModal}>
      {isLoading ? <Spinner size="L" style="primary500" /> : renderContents()}
    </Modal>
  );
};

export default AuthModal;
