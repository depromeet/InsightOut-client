import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { Capacity } from '@/features/collection/types';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  period: string;
  title: string;
  summaries: string[];
  capabilities: Omit<Capacity, 'count'>[];
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
