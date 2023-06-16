'use client';

import React from 'react';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import { ExperienceFormValues } from '@/feature/analyze/analyze.types';
import { Controller, useFormContext } from 'react-hook-form';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import { callbackRefWithResizeHeight } from '@/shared/utils/callbackRefWithResizeHeight';

const Keyword = () => {
  const { control } = useFormContext<ExperienceFormValues>();

  return (
    <QuestionCard title="경험으로 나타내고 싶은 직무역량 키워드를 선택하세요" subTitle="최대 4개까지 선택할 수 있어요">
      <Controller
        control={control}
        name="experienceRole"
        render={({ field: { ref, value, onChange } }) => (
          <TextAreaField
            ref={callbackRefWithResizeHeight(ref)}
            rows={1}
            placeholder="ex.UIUX 디자이너"
            chipTitle="나의 역할"
            maxLength={20}
            onChange={onChange}
            value={value}
          />
        )}
      />
    </QuestionCard>
  );
};

export default Keyword;
