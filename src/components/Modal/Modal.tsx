'use client';

import { PropsWithChildren } from 'react';

import type { Modal as ModalWrapperType } from '@chakra-ui/react';
import { Modal as ModalWrapper, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';

type ModalProps = MergeComponentProps<
  typeof ModalWrapperType,
  PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
  }>
>;

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, size, children, ...rest } = props;

  return (
    <>
      <ModalWrapper isOpen={isOpen} onClose={onClose} size={size} isCentered {...rest}>
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
