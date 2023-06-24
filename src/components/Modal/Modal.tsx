'use client';

import { Modal as ModalWrapper, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import type { Modal as ModalWrapperType } from '@chakra-ui/react';

type ModalProps = MergeComponentProps<
  typeof ModalWrapperType,
  PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
  }>
>;

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
