'use client';

import React from 'react';
import Tag from '../Tag/Tag';
import ProgressBar from './ProgressBar';
import { usePathname } from 'next/navigation';
import { STEP, STEPS } from '@/feature/analyze/constants';

const Progress = () => {
  const pathname = usePathname();
  const currentStepId = STEPS.find((step) => step.route === pathname)?.id ?? STEP.experience;
  const progress = 25 * currentStepId;

  return (
    <div className="w-[100%] rounded-[24px]">
      <div className="flex justify-between mb-[16px]">
        <span className="subhead2">경험분해 완성도</span>
        <Tag size="S" variant="gray100">
          {`${progress}%`}
        </Tag>
      </div>
      <ProgressBar progress={progress} />
      <div className="bg-gray-50 w-[100%] h-[2px] rounded-[8px] my-[24px]" />
      <span className="subhead2 mb-[24px]">작성 페이지</span>
    </div>
  );
};

export default Progress;
