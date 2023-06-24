import Modal from '@/components/Modal/Modal';
import { useRouter, useSearchParams } from 'next/navigation';
import SignUpContents from './ModalContents/SignUpContents';
import WelcomeContents from './ModalContents/WelcomeContents';
import CategoriesContents from './ModalContents/CategoriesContents';

type AuthModalProps = {
  nickname: string;
  isOpen: boolean;
  handleClose: () => void;
  signIn: () => void;
};

const AuthModal = ({ nickname, isOpen, handleClose, signIn }: AuthModalProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const renderContents = () => {
    const steps = searchParams.get('steps');

    switch (steps) {
      case 'signUp':
        return <SignUpContents signIn={signIn} />;
      case 'welcome':
        return <WelcomeContents nickname={nickname} onClickButton={() => router.push('/?steps=categories')} />;
      case 'categories':
        return <CategoriesContents nickname={nickname} />;
    }
  };

  return (
    <Modal size="2xl" isOpen={isOpen} onClose={handleClose}>
      {renderContents()}
    </Modal>
  );
};

export default AuthModal;
