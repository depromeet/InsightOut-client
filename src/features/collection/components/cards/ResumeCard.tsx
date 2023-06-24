import ActionList from '@/components/ActionList/ActionList';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import Modal from '@/components/Modal/Modal';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import formatUpdatedAt from '@/shared/utils/formatUpdateAt';
import { useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';

type Props = {
  updatedAt: string;
  title: string;
  answer: string;
};

const ResumeCard = ({ updatedAt, title, answer }: Props) => {
  const MAX_LENGTH = 2000;
  const answerTextareaRef = useRef<HTMLTextAreaElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO: line-clamp 커스텀

  return (
    <>
      <div className="border rounded-[24px] hover:shadow-S4 p-[24px]">
        <header className="relative mb-[16px]">
          {/* 액션버튼 */}
          <b className="b4 mb-[5px]">{formatUpdatedAt(updatedAt)}</b>
          {/* 자소서 문항 질문을 입력하지 않은 경우 -> ‘문항 질문을 적어보세요'로 제목이 보임 */}
          <h6 className="h6">{title}</h6>
          <ActionList>
            <ActionList.Button className="absolute top-0 right-0">
              <IconMoreVertical />
            </ActionList.Button>
            <ActionList.ItemWrapper>
              <ActionList.Item>수정하기</ActionList.Item>
              <ActionList.Item onClick={onOpen}>삭제하기</ActionList.Item>
            </ActionList.ItemWrapper>
          </ActionList>
        </header>
        <div>
          <textarea className="w-full bg-transparent resize-none line-clamp-5 b2" rows={5} ref={answerTextareaRef}>
            {answer}
          </textarea>
        </div>
        <footer className="flex flex-row-reverse mt-[8px] ">
          <b className="b3 text-light">
            <span className="text-secondary-500">{answer.length}자</span>/{MAX_LENGTH}자
          </b>
        </footer>
      </div>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalHeader.Title
          title="해당 자기소개서를 삭제하실건가요?"
          subTitle="삭제한 자기소개서는 다시 복구할 수 없어요"
        />
        <ModalFooter.TwoButton
          leftTextContent="취소하기"
          handleLeftClick={onClose}
          rightTextContent="삭제하기"
          handleRightClick={() => {
            console.log('삭제하기');
          }}
        />
      </Modal>
    </>
  );
};

export default ResumeCard;
