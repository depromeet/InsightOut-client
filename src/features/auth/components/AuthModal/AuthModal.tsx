'use client';

import { useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import Modal from '@/components/Modal/Modal';
import { useUserInfo } from '@/shared/store/user';
import emptyFunction from '@/shared/utils/emptyFunction';

import useGoogleLogin from '../../hooks/useGoogleLogin';
import CategoriesContents from './ModalContents/CategoriesContents';
import SignUpContents from './ModalContents/SignUpContents';
import StartNowContents from './ModalContents/StartNowContents';
import WelcomeContents from './ModalContents/WelcomeContents';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAbortSignUp: () => void;
};

const AuthModal = ({ isOpen, onClose, onAbortSignUp }: AuthModalProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { nickname } = useUserInfo();
  const { signIn } = useGoogleLogin();

  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCloseModal = () => {
    const isLastStep = !!searchParams.get('startnow');
    if (!isLastStep) onAbortSignUp();
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
        return <StartNowContents onClickLeftButton={() => router.back()} onClickRightButton={emptyFunction} />;
    }
  };
  return (
    <Modal size={modalSize()} isOpen={isOpen} onClose={handleCloseModal}>
      {renderContents()}
    </Modal>
  );
};

export default AuthModal;
