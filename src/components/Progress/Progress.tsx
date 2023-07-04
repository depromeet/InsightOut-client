'use client';

import React from 'react';
import { useFormContext } from 'react-hook-form';

import { STEPS } from '@/feature/analyze/constants';
import { ExperienceFormValues, WriteStatusType } from '@/feature/analyze/types';

import Tag from '../Tag/Tag';
import ProgressBar from './ProgressBar';

const PROGRESS_STEP_FACTOR = 100 / STEPS.length;

const Progress = () => {
  const { getValues } = useFormContext<ExperienceFormValues>();
  const writeStatus = getValues('writeStatus') as WriteStatusType[];
  const progress = PROGRESS_STEP_FACTOR * writeStatus.filter((status) => status === '작성완료').length;

  return (
    <div className="w-[100%] rounded-[24px]">
      <div className="flex justify-between mb-[16px]">
        <span className="subhead2">경험분해 완성도</span>
        <Tag size="S" variant="gray100">
          {`${progress}%`}
        </Tag>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Progress;
