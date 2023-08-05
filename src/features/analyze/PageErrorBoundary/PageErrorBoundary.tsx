'use client';

import React, { HTMLAttributes } from 'react';

import Image from 'next/image';
import LumosCry from 'public/images/lumos-nocard.png';

import Button from '@/components/Button/Button';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import { tw } from '@/shared/utils/tailwindMerge';

interface PageErrorBoundary extends HTMLAttributes<HTMLDivElement> {
  onClick?: () => void;
}

const PageErrorBoundary = ({ onClick, className, ...props }: PageErrorBoundary) => {
  return (
    <QuestionCard title="">
      <div className={tw('flex-center flex-col w-[100%] h-[700px]', className)} {...props}>
        <Image src={LumosCry} alt="lumos-cry" width={225} />
        <p className="subhead2 text-sub mt-[28px]">일시적인 오류가 발생했습니다</p>
        <p className="b1 text-light mb-[28px]">잠시 후 다시 시도해주세요</p>
        <Button variant="secondary" size="XL" onClick={onClick}>
          다시 연결하기
        </Button>
      </div>
    </QuestionCard>
  );
};

export default PageErrorBoundary;
