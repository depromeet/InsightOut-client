/* eslint-disable react/display-name */
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';

import Button from '@/components/Button/Button';
import Tag from '@/components/Tag/Tag';
import { MAX_LENGTH } from '@/shared/constants/maxLength';
import formatUpdatedAt from '@/shared/utils/formatUpdateAt';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  updatedAt: string;
  title: string;
  answer: string;
  aiCapabilities?: string[];
};

const ResumeAnswerModalCard = ({ isOpen, onClose, updatedAt, title, answer }: Props) => {
  return (
    <>
      <Modal size={'resumeAnswer'} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent p={50} textAlign={'left'}>
          <ModalHeader className="w-full rounded-t-[24px]" m={0}>
            <b className="b4 mb-[20px]">{formatUpdatedAt(updatedAt)}</b>
            <h6 className="h6">{title || '문항 질문을 적어보세요'}</h6>
          </ModalHeader>
          <ModalBody m={0} mt={'10px'} w={'full'}>
            <textarea className="w-full h-[500px] mt-[8px] pr-[24px] b1 resize-none" readOnly>
              {answer}
            </textarea>
          </ModalBody>
          <ModalFooter className="flex flex-col" w={'full'} m={0} p={0}>
            <div className="flex justify-end w-full">
              <b className="b3 text-light">
                <span className="text-secondary-500">{answer?.length}자</span>/{MAX_LENGTH.QUESTION}자
              </b>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

type AiRecommendResumeKeywordsProps = {
  aiCapabilities: string[];
};

ResumeAnswerModalCard.AiCapabilities = ({ aiCapabilities }: AiRecommendResumeKeywordsProps) => (
  <div className="w-full">
    <h4 className="subhead4">AI 추천 키워드</h4>
    <div className="flex justify-between w-full mt-[4px]">
      <ul className="flex flex-row gap-[4px]">
        {aiCapabilities.map((capability) => (
          <li key={`ai-recommend-${capability}`}>
            <Tag variant="secondary50-outline" size="M">
              {capability}
            </Tag>
          </li>
        ))}
      </ul>

      <Button size="M" variant="gray200">
        경험카드 확인하기
      </Button>
    </div>
  </div>
);

export default ResumeAnswerModalCard;
