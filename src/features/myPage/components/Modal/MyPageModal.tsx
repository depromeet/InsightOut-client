import Modal from '@/components/Modal/Modal';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';

type MyPageModalProps = {
  isOpen: boolean;
  title: string;
  buttonText: string;
  onClose: () => void;
  onClickButton: () => void;
};

const MyPageModal = ({ isOpen, onClose, title, buttonText, onClickButton }: MyPageModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>
        <ModalHeader.Title title={title} />
      </ModalHeader>
      <ModalFooter>
        <ModalFooter.TwoButton
          leftTextContent="닫기"
          handleLeftClick={onClose}
          rightTextContent={buttonText}
          handleRightClick={onClickButton}
        />
      </ModalFooter>
    </Modal>
  );
};

export default MyPageModal;
