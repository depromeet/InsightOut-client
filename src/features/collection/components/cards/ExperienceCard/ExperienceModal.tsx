import React from 'react';

import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { Capability } from '@/features/collection/types';

import ExperienceCard from './ExperienceCard';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  period: string;
  title: string;
  summaries: string[];
  capabilities: Omit<Capability, 'count'>[];
};

const ExperienceModal = ({ isOpen, onClose, title, period, summaries, capabilities }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg={'none'} shadow={'none'}>
        <ExperienceCard title={title} period={period} summaries={summaries} capabilities={capabilities} />
      </ModalContent>
    </Modal>
  );
};

export default ExperienceModal;
