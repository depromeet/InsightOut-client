import Modal from '@/components/Modal/Modal';

type AuthModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  signIn: () => void;
};

const AuthModal = ({ isOpen, handleClose, signIn }: AuthModalProps) => {
  return (
    <Modal size="2xl" isOpen={isOpen} onClose={handleClose}>
      {/* 컨텐츠 */}
    </Modal>
  );
};

export default AuthModal;
