'use client';

import React, { RefCallback, useCallback } from 'react';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import { Controller, useFormContext } from 'react-hook-form';
import { ExperienceFormValues } from '@/feature/analyze/analyze.types';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';

const Experience = () => {
  const { control } = useFormContext<ExperienceFormValues>();

  const resizeHeight = useCallback(
    (callbackRef: RefCallback<HTMLTextAreaElement>) => (element: HTMLTextAreaElement) => {
      callbackRef(element);
      element.style.height = 'auto';
      element.style.height = `${element.scrollHeight}px`;
    },
    []
  );
  return (
    <>
      <QuestionCard title="경험의 제목과 기간을 입력해주세요">
        <Controller
          control={control}
          name="title"
          render={({ field: { ref, value, onChange } }) => (
            <TextAreaField
              ref={resizeHeight(ref)}
              rows={1}
              placeholder="ex.00직무 디자인 인턴"
              chipTitle="경험 제목"
              maxLength={50}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </QuestionCard>
      <QuestionCard title="내가 맡았던 역할은 무엇인가요?">
        <div>asd</div>
      </QuestionCard>
      <QuestionCard title="그것을 왜 무엇 때문에 하게 됐나요?">
        <div>asd</div>
      </QuestionCard>
    </>
  );
};

export default Experience;
