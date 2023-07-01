import { useSearchParams } from 'next/navigation';

import Modal from '@/components/Modal/Modal';

import SignUpContents from './ModalContents/SignUpContents';

type AuthModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  signIn: () => void;
};

const AuthModal = ({ isOpen, handleClose, signIn }: AuthModalProps) => {
  const searchParams = useSearchParams();

  const renderContents = () => {
    const steps = searchParams.get('steps');

    switch (steps) {
      case 'signUp':
        return <SignUpContents signIn={signIn} />;
    }
  };
  return (
    <Modal size="2xl" isOpen={isOpen} onClose={handleClose}>
      {renderContents()}
    </Modal>
  );
};

export default AuthModal;
