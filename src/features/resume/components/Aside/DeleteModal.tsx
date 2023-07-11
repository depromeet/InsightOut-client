import Modal from '@/components/Modal/Modal';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';

type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  handleLeftClick: () => void;
  handleRightClick: () => void;
};

const DeleteModal = ({ isOpen, onClose, handleLeftClick, handleRightClick }: DeleteModalProps) => {
  return (
    <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalHeader className="whitespace-pre-line">
        <ModalHeader.Title title={`삭제하시겠습니까?\n한번 삭제하면 복구하기 어려워요.`} />
      </ModalHeader>
      <ModalFooter.TwoButton
        leftTextContent="취소하기"
        rightTextContent="삭제하기"
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
      />
    </Modal>
  );
};

export default DeleteModal;
