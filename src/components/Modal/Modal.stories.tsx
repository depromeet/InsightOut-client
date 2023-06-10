import type { Meta } from '@storybook/react';

import Modal from './Modal';
import Button from '../Button/Button';
import { ModalBody, useDisclosure } from '@chakra-ui/react';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;

export const DefaultModal = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button size="M" variant="gray900" onClick={onOpen}>
        Open Default Modal
      </Button>
      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalBody>Default Modal</ModalBody>
      </Modal>
    </div>
  );
};

export const ModalWithHeaderTitle = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size="M" variant="gray900" onClick={onOpen}>
        Open Modal with Title
      </Button>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalHeader.Title title="텍스트를 입력해주세요" subTitle="추가 설명이 필요할 경우 기재해주세요" />
        <ModalBody>
          <div>제목이 있는 모달입니다.</div>
        </ModalBody>
      </Modal>
    </>
  );
};

export const ModalWithFooterOneButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size="M" variant="gray900" onClick={onOpen}>
        Open Modal with Footer 1 Button
      </Button>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalBody>
          <div>버튼 하나가 있는 모달입니다.</div>
        </ModalBody>
        <ModalFooter.OneButton textContent="button" handleClick={onClose} />
      </Modal>
    </>
  );
};

export const ModalWithFooterTwoButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size="M" variant="gray900" onClick={onOpen}>
        Open Modal with Footer 2 Button
      </Button>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalBody>
          <div>버튼 두 개가 있는 모달입니다.</div>
        </ModalBody>
        <ModalFooter.TwoButton
          leftTextContent="Button"
          handleLeftClick={onClose}
          rightTextContent="Button"
          handleRightClick={onClose}
        />
      </Modal>
    </>
  );
};

export const FullModal = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size="M" variant="gray900" onClick={onOpen}>
        Open Full Modal
      </Button>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalHeader.Title title="텍스트를 입력해주세요" subTitle="추가 설명이 필요할 경우 기재해주세요" />
        <ModalBody>
          <div>제목과 버튼 두 개가 있는 모달입니다.</div>
        </ModalBody>
        <ModalFooter.TwoButton
          leftTextContent="Button"
          handleLeftClick={onClose}
          rightTextContent="Button"
          handleRightClick={onClose}
        />
      </Modal>
    </>
  );
};
