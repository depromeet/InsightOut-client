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
import userApi from '@/apis/user/user';
import { Field } from '@/shared/constants/user';

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

  /**
   * 회원가입 성공 시 핸들러
   */
  const handleSignUpSuccess = () => {
    setIsSignedIn(true);
    setIsTokenRequired(false);
    onClose();
  };

  /**
   * 직무 선택 핸들러
   */
  const handleChooseJob = async () => {
    /**
     * @TODO patch api/onboarding 에 field 추가 작업 완료되면 전송 로직 추가
     */
    await userApi.patch({ nickname, field: selectedCategory.field });
    router.push('/?steps=startnow');
  };

  /**
   * 만나서 반가워요 버튼 클릭 핸들러
   */
  const handleClickGreeting = () => {
    /**
     * @TODO 기존에 회원가입을 했던 유저라면 바로 모달 Close
     */
    // onClose();
    router.push('/?steps=categories');
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
        return <WelcomeContents nickname={nickname} onClickButton={handleClickGreeting} />;
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
