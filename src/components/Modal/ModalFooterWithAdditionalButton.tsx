'use client';

import { Button, ButtonProps } from '@chakra-ui/react';

interface ModalFooter1ButtonProps {
  content: string;
  buttonProps?: ButtonProps;
  onClick?: () => void;
}
// eslint-disable-next-line react/display-name
const ModalFooterWithAdditionalButton = ({ content, buttonProps, onClick }: ModalFooter1ButtonProps) => (
  <Button {...buttonProps} onClick={onClick}>
    {content}
  </Button>
);

export default ModalFooterWithAdditionalButton;
