'use client';

import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import List from '@/components/demo/List';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import { useDisclosure } from '@chakra-ui/react';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button size="md" variant="primary" onClick={onOpen}>
        Open Full Modal
      </Button>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalHeader.Title title="텍스트를 입력해주세요입력해주세요" subTitle="추가 설명이 필요할 경우 기재해주세요" />
        제목이 있는 모달입니다.
        <ModalFooter.TwoButton
          leftTextContent="Button"
          handleLeftClick={onClose}
          rightTextContent="Button"
          handleRightClick={onClose}
        />
      </Modal>
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration
        queryKey={['demo']}
        queryFn={() => fetch('https://jsonplaceholder.typicode.com/todos').then((response) => response.json())}>
        <List />
      </PrefetchHydration>
    </div>
  );
};

export default Page;
