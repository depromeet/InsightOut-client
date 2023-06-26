'use client';

import Modal from '@/components/Modal/Modal';
import { useRouter, useSearchParams } from 'next/navigation';
import SignUpContents from './ModalContents/SignUpContents';
import WelcomeContents from './ModalContents/WelcomeContents';
import CategoriesContents from './ModalContents/CategoriesContents';
import { useUserInfo } from '@/shared/store/user';
import { useState } from 'react';
import useGoogleLogin from '../../hooks/useGoogleLogin';
import StartNowContents from './ModalContents/StartNowContents';
import { useAuthActions } from '../../store';
import Spinner from '@/components/Spinner/Spinner';

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

  const [selectedCategory, setSelectedCategory] = useState<string>('');

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
            onClickRightButton={() => router.push('/?steps=startnow')}
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
