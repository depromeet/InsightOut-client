/* eslint-disable react/display-name */
import React, { MouseEvent } from 'react';

import { Modal, useDisclosure } from '@chakra-ui/react';

import ActionList from '@/components/ActionList/ActionList';
import Button from '@/components/Button/Button';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import { TextLengthMessage } from '@/components/Input/TextLengthMessage';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import Tag from '@/components/Tag/Tag';
import { MAX_LENGTH } from '@/shared/constants/maxLength';
import formatUpdatedAt from '@/shared/utils/formatUpdateAt';

import ExperienceModal from './ExperienceCard/ExperienceModal';
import ResumeAnswerModalCard from './ResumeAnswerModalCard';

type Props = {
  id: number;
  updatedAt: string;
  title: string;
  answer: string;
  aiCapabilities: string[];
};

const AiRecommendResumeCard = ({ id, title, answer, updatedAt, aiCapabilities }: Props) => {
  const { isOpen: isOpenActionListModal, onClose: onCloseActionListModal } = useDisclosure();
  const {
    isOpen: isOpenAiResumeAnswerModal,
    onOpen: onOpenAiResumeAnswerModal,
    onClose: onCloseAiResumeAnswerModal,
  } = useDisclosure();

  const {
    isOpen: isOpenExperienceCardModal,
    onOpen: onOpenExperienceCardModal,
    onClose: onCloseExperienceCardModal,
  } = useDisclosure();

  return (
    <>
      <div className="border rounded-[24px] hover:shadow-S4 p-[24px]" onClick={onOpenAiResumeAnswerModal}>
        <AiRecommendResumeCard.Header title={title} updatedAt={updatedAt} />
        <div>
          <p className="w-full bg-transparent resize-none line-clamp-5 b2">{answer}</p>
        </div>
        <div className="flex flex-row-reverse mt-[8px] text-[14px]">
          <TextLengthMessage currentLength={answer.length} maxLength={MAX_LENGTH.AI_RESUME} />
        </div>
        <AiRecommendResumeCard.Footer
          id={id}
          aiCapabilities={aiCapabilities}
          isOpenExperienceCardModal={isOpenExperienceCardModal}
          onOpenExperienceCardModal={onOpenExperienceCardModal}
          onCloseExperienceCardModal={onCloseExperienceCardModal}
        />
      </div>
      <ResumeAnswerModalCard
        isOpen={isOpenAiResumeAnswerModal}
        onClose={onCloseAiResumeAnswerModal}
        title={title}
        answer={answer}
        updatedAt={updatedAt}
        aiCapabilities={aiCapabilities}
      />
      <Modal size="md" isOpen={isOpenActionListModal} onClose={onCloseActionListModal}>
        <ModalHeader.Title
          title="해당 AI 추천 자기소개서를 삭제하실건가요?"
          subTitle="삭제한 AI 추천 자기소개서는 다시 복구할 수 없어요"
        />
        <ModalFooter.TwoButton
          leftTextContent="취소하기"
          handleLeftClick={onCloseActionListModal}
          rightTextContent="삭제하기"
          handleRightClick={() => {
            console.log('삭제하기');
          }}
        />
      </Modal>
    </>
  );
};

type AiRecommendResumeCardHeaderProps = {
  title: string;
  updatedAt: string;
};

AiRecommendResumeCard.Header = ({ title, updatedAt }: AiRecommendResumeCardHeaderProps) => (
  <header className="relative">
    <b className="b4 mb-[5px]">{formatUpdatedAt(updatedAt) + ' 마지막 수정'}</b>
    <h6 className="h6">{title}</h6>
    <ActionList>
      <ActionList.Button
        className="absolute top-0 right-0"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}>
        <IconMoreVertical />
      </ActionList.Button>
      <ActionList.ItemWrapper>
        <ActionList.Item onClick={() => console.log('삭제하기')}>삭제하기</ActionList.Item>
      </ActionList.ItemWrapper>
    </ActionList>
  </header>
);

type FooterProps = {
  id: number;
  aiCapabilities: string[];
  isOpenExperienceCardModal: boolean;
  onOpenExperienceCardModal: () => void;
  onCloseExperienceCardModal: () => void;
};

AiRecommendResumeCard.Footer = ({
  id,
  aiCapabilities,
  isOpenExperienceCardModal,
  onOpenExperienceCardModal,
  onCloseExperienceCardModal,
}: FooterProps) => {
  return (
    <>
      <div className="mt-[8px]">
        <h4 className="subhead4 mb-[4px]">AI 추천 키워드</h4>
        <div className="flex flex-row justify-between">
          <ul className="flex flex-row gap-[4px]">
            {aiCapabilities.map((aiCapability, index) => (
              <li key={`ai-${aiCapabilities}-${index}`}>
                <Tag size="M" variant="secondary50-outline">
                  {aiCapability}
                </Tag>
              </li>
            ))}
          </ul>
          <Button
            size="M"
            variant="gray200"
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              onOpenExperienceCardModal();
            }}>
            경험카드 확인하기
          </Button>
        </div>
      </div>
      <ExperienceModal isOpen={isOpenExperienceCardModal} onClose={onCloseExperienceCardModal} experienceId={id} />
    </>
  );
};

export default AiRecommendResumeCard;
