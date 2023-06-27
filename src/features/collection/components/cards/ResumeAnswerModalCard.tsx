import { MAX_LENGTH } from '@/shared/constants/maxLength';
import formatUpdatedAt from '@/shared/utils/formatUpdateAt';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  updatedAt: string;
  title: string;
  answer: string;
};

const ResumeAnswerModalCard = ({ isOpen, onClose, updatedAt, title, answer }: Props) => {
  return (
    <Modal size={'resumeAnswer'} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p={50} textAlign={'left'}>
        <ModalHeader className="w-full rounded-t-[24px]" m={0}>
          <b className="b4 mb-[20px]">{formatUpdatedAt(updatedAt)}</b>
          <h6 className="h6">{title || '문항 질문을 적어보세요'}</h6>
        </ModalHeader>
        <ModalBody m={0} mt={'10px'} w={'full'}>
          <textarea className="w-full h-[500px] mt-[8px] pr-[24px] b1 resize-none">{answer}</textarea>
        </ModalBody>
        <ModalFooter className="flex justify-end" w={'full'} m={0} p={0}>
          <b className="b3 text-light">
            <span className="text-secondary-500">{answer.length}자</span>/{MAX_LENGTH.QUESTION}자
          </b>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResumeAnswerModalCard;
