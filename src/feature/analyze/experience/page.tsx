'use client';

import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import TextField from '@/components/Input/TextField/TextField';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import PickerFieldContainer from '@/feature/analyze/experience/PickerFieldContainer';
import { ExperienceFormValues } from '@/feature/analyze/types';
import { useFetchAnalyze } from '@/hooks/reactQuery/analyze/query';
import { useUpdateEffect } from '@/hooks/useUpdateEffect';
import { callbackRefWithResizeHeight } from '@/shared/utils/callbackRefWithResizeHeight';

const ExperiencePage = () => {
  const { control, setFocus, setValue } = useFormContext<ExperienceFormValues>();
  const { data: analyze } = useFetchAnalyze({ last: true });

  const handlePeriodChange =
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

  useUpdateEffect(() => {
    if (!isEmpty(analyze)) {
      const [endYYYY, endMM] = analyze.endDate.split('-');
      const [startYYYY, startMM] = analyze.startDate.split('-');
      setValue('title', analyze.title);
      setValue('startYYYY', startYYYY);
      setValue('startMM', startMM);
      setValue('endYYYY', endYYYY);
      setValue('endMM', endMM);
      setValue('experienceRole', analyze.experienceInfo.experienceRole);
      setValue('motivation', analyze.experienceInfo.motivation);
    }
  }, [analyze]);

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
          <PickerFieldContainer>
            <Controller
              control={control}
              name="startYYYY"
              render={({ field: { ref, onChange, value } }) => (
                <TextField
                  type="number"
                  ref={ref}
                  placeholder="YYYY"
                  maxLength={4}
                  onChange={handlePeriodChange(onChange, 4, 'startMM')}
                  value={value || ''}
                />
              )}
            />
            <Controller
              control={control}
              name="startMM"
              rules={MMRules}
              render={({ field: { ref, onChange, value }, formState: { errors } }) => (
                <TextField
                  type="number"
                  ref={ref}
                  placeholder="MM"
                  maxLength={2}
                  onChange={handlePeriodChange(onChange, 2, 'endYYYY')}
                  value={value || ''}
                  error={!!errors.startMM}
                  errorMessage={errors.startMM?.message}
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
                  onChange={handlePeriodChange(onChange, 4, 'endMM')}
                  maxLength={4}
                  value={value || ''}
                />
              )}
            />
            <Controller
              control={control}
              name="endMM"
              rules={MMRules}
              render={({ field: { ref, onChange, value }, formState: { errors } }) => (
                <TextField
                  type="number"
                  ref={ref}
                  placeholder="MM"
                  onChange={handlePeriodChange(onChange, 2, 'experienceRole')}
                  maxLength={2}
                  value={value || ''}
                  error={!!errors.endMM}
                  errorMessage={errors.endMM?.message}
                />
              )}
            />
          </PickerFieldContainer>
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

export default ExperiencePage;

const MMRules = {
  pattern: {
    value: /(0[1-9]|1[0-2])/,
    message: '정확한 날짜를 입력해 주세요',
  },
};
