'use client';

import { Modal as ModalWrapper, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
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
      <ModalWrapper isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent alignItems="center" justifyContent="center">
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Modal;
