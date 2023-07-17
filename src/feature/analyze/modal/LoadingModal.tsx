'use client';
import React from 'react';
import { PropsWithChildren } from 'react';

import type { Modal as ModalWrapperType } from '@chakra-ui/react';
import { Modal as ModalWrapper, ModalContent, ModalOverlay } from '@chakra-ui/react';

import Lottie from '@/components/Lottie/Lottie';
import { useUserNickname } from '@/shared/store/user';

type ModalProps = MergeComponentProps<
  typeof ModalWrapperType,
  PropsWithChildren<{
    isOpen: boolean;
    onClose: () => void;
  }>
>;

const LoadingModal = ({ isOpen, onClose, size }: ModalProps) => {
  const username = useUserNickname();
  return (
    <>
      <ModalWrapper
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        isCentered
        closeOnEsc={false}
        closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-[400px] h-[400px] mb-[25px]">
            <Lottie src="/lotties/lumos-loading.json" />
          </div>
          <h5 className="whitespace-pre h6 text-main">
            인사이트 아웃 AI 루모스가 {username}님의 경험을 분석하고 있어요
          </h5>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default LoadingModal;
