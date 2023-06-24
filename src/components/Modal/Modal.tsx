'use client';

import { Modal as ModalWrapper, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  size?: 'sm' | 'md';
}>;

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, size, children } = props;

  return (
    <>
      <ModalWrapper isOpen={isOpen} onClose={onClose} size={size} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Modal;
