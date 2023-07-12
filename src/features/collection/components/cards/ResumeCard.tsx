'use client';

import React, { useRef } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import ActionList from '@/components/ActionList/ActionList';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import { TextLengthMessage } from '@/components/Input/TextLengthMessage';
import Modal from '@/components/Modal/Modal';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import { QuestionData } from '@/features/resume/types/question';
import { useDeleteResume } from '@/hooks/reactQuery/resume/mutation';
import { MAX_LENGTH } from '@/shared/constants/maxLength';
import { ROUTES } from '@/shared/constants/routes';
import formatUpdatedAt from '@/shared/utils/formatUpdateAt';

import ResumeAnswerModalCard from './ResumeAnswerModalCard';

type Props = {
  resumeId: number;
  question: QuestionData;
};

const ResumeCard = ({ resumeId, question: { id: questionId, answer, title, updatedAt } }: Props) => {
  const answerPRef = useRef<HTMLParagraphElement>(null);

  const {
    isOpen: isOpenActionListModal,
    onOpen: onOpenActionListModal,
    onClose: onCloseActionListModal,
  } = useDisclosure();
  const {
    isOpen: isOpenResumeAnswerModalCard,
    onOpen: onOpenResumeAnswerModalCard,
    onClose: onCloseResumeAnswerModalCard,
  } = useDisclosure();

  const handleActionListClick = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => e.stopPropagation();

  const { push } = useRouter();
  const handleEditButtonClick = () => {
    push(`${ROUTES.RESUMES}/${questionId}`);
  };

  const { mutate: deleteResume } = useDeleteResume(resumeId);
  const handleDeleteButtonClick = () => {
    deleteResume({ resumeId });
  };

  return (
    <>
      <div className="border rounded-[24px] hover:shadow-S4 p-[24px]" onClick={onOpenResumeAnswerModalCard}>
        <header className="relative mb-[16px]">
          {/* 액션버튼 */}
          <b className="b4 mb-[5px]">{formatUpdatedAt(updatedAt) + ' 마지막 수정'}</b>
          <h6 className="h6">{title || '문항 질문을 적어보세요'}</h6>
          <ActionList>
            <ActionList.Button className="absolute top-0 right-0" onClick={handleActionListClick}>
              <IconMoreVertical />
            </ActionList.Button>
            <ActionList.ItemWrapper onClick={handleActionListClick}>
              <ActionList.Item onClick={handleEditButtonClick}>수정하기</ActionList.Item>
              <ActionList.Item onClick={onOpenActionListModal}>삭제하기</ActionList.Item>
            </ActionList.ItemWrapper>
          </ActionList>
        </header>
        <div>
          <p className="w-full bg-transparent resize-none line-clamp-5 b2" ref={answerPRef}>
            {answer}
          </p>
        </div>
        <footer className="flex flex-row-reverse mt-[8px] ">
          <TextLengthMessage currentLength={answer?.length} maxLength={MAX_LENGTH.QUESTION} />
        </footer>
      </div>
      <Modal size="md" isOpen={isOpenActionListModal} onClose={onCloseActionListModal}>
        <ModalHeader.Title
          title="해당 자기소개서를 삭제하실건가요?"
          subTitle="삭제한 자기소개서는 다시 복구할 수 없어요"
        />
        <ModalFooter.TwoButton
          leftTextContent="취소하기"
          handleLeftClick={onCloseActionListModal}
          rightTextContent="삭제하기"
          handleRightClick={handleDeleteButtonClick}
        />
      </Modal>
      <ResumeAnswerModalCard
        isOpen={isOpenResumeAnswerModalCard}
        onClose={onCloseResumeAnswerModalCard}
        title={title}
        updatedAt={updatedAt}
        answer={answer}
      />
    </>
  );
};

export default ResumeCard;
