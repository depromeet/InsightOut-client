import React from 'react';

import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { ExperienceStatus } from '@/features/analyze/types';
import { AiRecommendQuestions } from '@/features/collection/types';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';

import ExperienceCard from './ExperienceCard';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  experienceId: number;
  period: string;
  title: string;
  experienceStatus: ExperienceStatus;
  summaryKeywords?: string[];
  experienceCapabilityKeywords?: string[];
  aiRecommendKeywords?: string[];
  aiRecommendQuestions?: AiRecommendQuestions[];
};

const ExperienceModal = ({
  isOpen,
  onClose,
  experienceId,
  title,
  period,
  summaryKeywords,
  experienceStatus,
  experienceCapabilityKeywords,
  aiRecommendKeywords,
  aiRecommendQuestions,
}: Props) => {
  const { data: experience } = useGetExperience({ experienceId });

  const experienceInfo = experience?.ExperienceInfo;
  const star = [experience?.situation, experience?.task, experience?.action, experience?.result].join('\n\n');
  const aiResume = experience?.AiResume?.content;
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={'none'} shadow={'none'}>
        <ExperienceCard
          title={title}
          period={period}
          experienceStatus={experienceStatus}
          summaryKeywords={summaryKeywords}
          experienceCapabilityKeywords={experienceCapabilityKeywords}
          aiRecommendKeywords={aiRecommendKeywords}
          experienceInfo={experienceInfo}
          star={star}
          aiResume={aiResume}
          aiRecommendQuestions={aiRecommendQuestions}
        />
      </ModalContent>
    </Modal>
  );
};

export default ExperienceModal;
