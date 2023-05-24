'use client';

import { Button, ButtonProps, ModalBody, ModalFooter, ModalHeader } from '@chakra-ui/react';
import { Modal as ModalWrapper, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { PropsWithChildren, ReactElement } from 'react';

interface ModalProps {
  size?: 'sm' | 'ml';
  header?: ReactElement;
  additionalFooter?: ReactElement;
  closeButtonContent: string;
  closeButtonProps?: ButtonProps;
  openButtonContent?: string;
  openButtonProps?: ButtonProps;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {
    size = 'ml',
    header,
    children,
    additionalFooter,
    closeButtonContent,
    closeButtonProps,
    openButtonContent,
    openButtonProps,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} {...openButtonProps}>
        {openButtonContent}
      </Button>

      <ModalWrapper isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent alignItems="center">
          <ModalHeader textAlign="center">{header}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter justifyContent="center" gap="2">
            {closeButtonContent ? (
              <Button onClick={onClose} {...closeButtonProps}>
                {closeButtonContent}
              </Button>
            ) : (
              ''
            )}
            {additionalFooter}
          </ModalFooter>
          <ModalCloseButton />
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Modal;
