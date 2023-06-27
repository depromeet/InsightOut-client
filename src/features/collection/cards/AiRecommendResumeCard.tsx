/* eslint-disable react/display-name */
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import ActionList from '@/components/ActionList/ActionList';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import formatUpdatedAt from '@/shared/utils/formatUpdateAt';

type Props = {
  updatedAt: string;
  title: string;
  answer: string;
};

const AiRecommendResumeCard = ({ title, answer, updatedAt }: Props) => {
  const {
    isOpen: isOpenActionListModal,
    onOpen: onOpenActionListModal,
    onClose: onCloseActionListModal,
  } = useDisclosure();
  const {
    isOpen: isOpenAiResumeAnswerModal,
    onOpen: onOpenAiResumeAnswerModal,
    onClose: onCloseAiResumeAnswerModal,
  } = useDisclosure();

  return (
    <>
      <div className="border rounded-[24px] hover:shadow-S4 p-[24px]" onClick={onOpenAiResumeAnswerModal}>
        <AiRecommendResumeCard.Header
          title={title}
          updatedAt={updatedAt}
          onOpenActionListModal={onOpenActionListModal}
        />
      </div>
    </>
  );
};

type AiRecommendResumeCardHeaderProps = {
  title: string;
  updatedAt: string;
  onOpenActionListModal: () => void;
};

AiRecommendResumeCard.Header = ({ title, updatedAt, onOpenActionListModal }: AiRecommendResumeCardHeaderProps) => (
  <header>
    <b className="b4 mb-[5px]">{formatUpdatedAt(updatedAt) + ' 마지막 수정'}</b>
    <h6 className="h6">{title}</h6>
    <ActionList>
      <ActionList.Button
        className="absolute top-0 right-0"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}>
        <IconMoreVertical />
      </ActionList.Button>
      <ActionList.ItemWrapper>
        <ActionList.Item onClick={onOpenActionListModal}>삭제하기</ActionList.Item>
      </ActionList.ItemWrapper>
    </ActionList>
  </header>
);

export default AiRecommendResumeCard;
