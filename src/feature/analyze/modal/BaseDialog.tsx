import React from 'react';

import { ThemingProps } from '@chakra-ui/react';

import Modal from '@/components/Modal/Modal';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';

export interface BaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  size: ThemingProps<'Modal'>['size'];
  title: string;
  textContent?: string;
  leftTextContent?: string;
  rightTextContent?: string;
  handleLeftClick?: () => void;
  handleRightClick?: () => void;
}

const BaseDialog = (props: BaseDialogProps) => {
  const {
    isOpen,
    onClose,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    size,
    title,
    textContent,
    handleLeftClick,
    handleRightClick,
    leftTextContent,
    rightTextContent,
  } = props;
  return (
    <Modal
      size={size}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEsc={closeOnEsc}>
      <ModalHeader.Title title={title} />
      {leftTextContent && rightTextContent ? (
        <ModalFooter.TwoButton
          leftTextContent={leftTextContent}
          rightTextContent={rightTextContent}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      ) : (
        <ModalFooter.OneButton textContent={textContent || ''} handleClick={onClose} />
      )}
    </Modal>
  );
};

export default BaseDialog;
