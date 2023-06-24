import formatUpdatedAt from '@/shared/utils/formatUpdateAt';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { ANSWER_MAX_LENGTH } from '../../constants';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  updatedAt: string;
  title: string;
  answer: string;
};

const ResumeAnswerModalCard = (props: Props) => {
  const { isOpen, onClose, updatedAt, title, answer } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w={1085} h={738} p={50} textAlign={'left'}>
        <ModalHeader className="w-full rounded-t-[24px]" m={0}>
          <b className="b4 mb-[20px]">{formatUpdatedAt(updatedAt)}</b>
          {/* 자소서 문항 질문을 입력하지 않은 경우 -> ‘문항 질문을 적어보세요'로 제목이 보임 */}
          <h6 className="h6">{title}</h6>
        </ModalHeader>
        <ModalBody m={0} mt={'10px'} w={'full'}>
          <textarea className="w-full h-[500px] mt-[8px] pr-[24px] b1 resize-none">{answer}</textarea>
        </ModalBody>
        <ModalFooter className="flex flex-row-reverse w-full" m={0} p={0}>
          <b className="b3 text-light">
            <span className="text-secondary-500">{answer.length}자</span>/{ANSWER_MAX_LENGTH}자
          </b>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResumeAnswerModalCard;
