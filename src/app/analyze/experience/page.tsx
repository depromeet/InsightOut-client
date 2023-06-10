'use client';

import React from 'react';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import { Controller, useFormContext } from 'react-hook-form';
import { ExperienceFormValues } from '@/feature/analyze/analyze.types';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import { callbackRefWithResizeHeight } from '@/shared/utils/callbackRefWithResizeHeight';
import TextField from '@/components/Input/TextField/TextField';

const Experience = () => {
  const { control, setFocus } = useFormContext<ExperienceFormValues>();

  const handleYYYYMMChange =
    (
      // eslint-disable-next-line unused-imports/no-unused-vars
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
      maxLength: number,
      name: keyof ExperienceFormValues
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const valueLength = e.target.value.length;
      if (valueLength >= maxLength) {
        setFocus(name);
        if (valueLength > maxLength) return;
      }
      onChange(e);
    };

  return (
    <>
      <QuestionCard title="경험의 제목과 기간을 입력해주세요">
        <>
          <Controller
            control={control}
            name="title"
            render={({ field: { ref, onChange, value } }) => (
              <TextAreaField
                ref={callbackRefWithResizeHeight(ref)}
                rows={1}
                placeholder="ex.00직무 디자인 인턴"
                chipTitle="경험 제목"
                maxLength={50}
                onChange={onChange}
                value={value || ''}
              />
            )}
          />
          <Controller
            control={control}
            name="startYYYY"
            render={({ field: { ref, onChange, value } }) => (
              <TextField
                type="number"
                ref={ref}
                placeholder="YYYY"
                chipTitle="기간"
                maxLength={4}
                max={4}
                onChange={handleYYYYMMChange(onChange, 4, 'startMM')}
                value={value || ''}
              />
            )}
          />
          <Controller
            control={control}
            name="startMM"
            render={({ field: { ref, onChange, value } }) => (
              <TextField
                type="number"
                ref={ref}
                placeholder="MM"
                maxLength={2}
                onChange={handleYYYYMMChange(onChange, 2, 'endYYYY')}
                value={value || ''}
              />
            )}
          />
          <Controller
            control={control}
            name="endYYYY"
            render={({ field: { ref, onChange, value } }) => (
              <TextField
                type="number"
                ref={ref}
                placeholder="YYYY"
                onChange={handleYYYYMMChange(onChange, 4, 'endMM')}
                maxLength={4}
                value={value || ''}
              />
            )}
          />
          <Controller
            control={control}
            name="endMM"
            render={({ field: { ref, onChange, value } }) => (
              <TextField
                type="number"
                ref={ref}
                placeholder="MM"
                onChange={handleYYYYMMChange(onChange, 2, 'experienceRole')}
                maxLength={2}
                value={value || ''}
              />
            )}
          />
        </>
      </QuestionCard>
      <QuestionCard title="내가 맡았던 역할은 무엇인가요?">
        <Controller
          control={control}
          name="experienceRole"
          render={({ field: { ref, onChange, value } }) => (
            <TextAreaField
              ref={callbackRefWithResizeHeight(ref)}
              rows={1}
              placeholder="ex.UIUX 디자이너"
              chipTitle="나의 역할"
              maxLength={20}
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
      </QuestionCard>
      <QuestionCard title="그것을 왜 무엇 때문에 하게 됐나요?">
        <Controller
          control={control}
          name="motivation"
          render={({ field: { ref, onChange, value } }) => (
            <TextAreaField
              ref={callbackRefWithResizeHeight(ref)}
              rows={4}
              placeholder="ex.개발자와 협업역량을 기르기 위해 하게 됨"
              chipTitle="경험 수행 이유"
              maxLength={100}
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
      </QuestionCard>
    </>
  );
};

export default Experience;
