import React from 'react';

import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { ExperienceStatus } from '@/features/analyze/types';

import ExperienceCard from './ExperienceCard';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  period: string;
  title: string;
  experienceStatus: ExperienceStatus;
  summaryKeywords?: string[];
  experienceCapabilityKeywords?: string[];
  aiRecommendKeywords?: string[];
};

const ExperienceModal = ({
  isOpen,
  onClose,
  title,
  period,
  summaryKeywords,
  experienceStatus,
  experienceCapabilityKeywords,
  aiRecommendKeywords,
}: Props) => {
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
        />
      </ModalContent>
    </Modal>
  );
};

export default ExperienceModal;
