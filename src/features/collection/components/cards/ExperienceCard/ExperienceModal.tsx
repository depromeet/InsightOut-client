import React from 'react';

import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { MESSAGE } from '@/features/collection/constants';
import getExperiencePeriod from '@/features/collection/utils/getExperiencePeriod';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';
import { EXPERIENCE_CARD_MODAL_MESSAGE } from '@/shared/constants/messages';

import ExperienceCard from './ExperienceCard';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  experienceId: number;
};

const ExperienceModal = ({ isOpen, onClose, experienceId }: Props) => {
  const { data: experience } = useGetExperience({ experienceId });

  if (!experience) return null;

  const {
    title,
    ExperienceInfo,
    situation,
    task,
    action,
    result,
    AiResume,
    startDate,
    endDate,
    experienceStatus,
    summaryKeywords,
    experienceCapabilityKeywords,
    AiRecommendQuestions,
  } = experience;

  const experienceInfo = ExperienceInfo;
  const star = [situation, task, action, result].join('\n\n');
  const aiResume = AiResume?.content;
  const aiRecommendKeywords =
    AiResume?.AiResumeCapabilities.map(({ Capability }) => Capability.keyword) || MESSAGE.NOT_HAS_AI_RECOMMEND_KEYWORDS;
  const experiencePeriod = startDate && endDate ? getExperiencePeriod(startDate, endDate) : MESSAGE.NOT_HAS_PERIOD;

  const renderedTitle = title || EXPERIENCE_CARD_MODAL_MESSAGE.DEFAULT_TITLE;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={'none'} shadow={'none'}>
        <ExperienceCard
          title={renderedTitle}
          period={experiencePeriod}
          experienceStatus={experienceStatus}
          summaryKeywords={summaryKeywords}
          experienceCapabilityKeywords={experienceCapabilityKeywords}
          aiRecommendKeywords={aiRecommendKeywords}
          experienceInfo={experienceInfo}
          star={star}
          aiResume={aiResume}
          aiRecommendQuestions={AiRecommendQuestions}
        />
      </ModalContent>
    </Modal>
  );
};

export default ExperienceModal;
