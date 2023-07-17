'use client';

import React, { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import { ExperienceFormValues } from '@/features/analyze/types';
import { callbackRefWithResizeHeight } from '@/shared/utils/callbackRefWithResizeHeight';

const InformationPage = () => {
  const { control } = useFormContext<ExperienceFormValues>();
  const { prefetch } = useRouter();

  useEffect(() => {
    prefetch('/analyze/verify');
  }, [prefetch]);
  return (
    <>
      <QuestionCard
        title="활동의 계기나 배경이 무엇인가요?"
        subTitle="구체적인 상황 정보(언제, 어디서, 누구와 어떻게 등) 처음 보는 사람도 이해갈 수 있도록 작성해주세요">
        <Controller
          control={control}
          name="situation"
          render={({ field: { ref, onChange, value } }) => (
            <TextAreaField
              ref={callbackRefWithResizeHeight(ref)}
              rows={4}
              placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감"
              chipTitle="활동 배경"
              maxLength={100}
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
      </QuestionCard>
      <QuestionCard
        title="당시 해결해야하는 과제나 목표가 무엇이었나요?"
        subTitle="인식한 과제와 목표에 대해 작성해주세요">
        <Controller
          control={control}
          name="task"
          render={({ field: { ref, onChange, value } }) => (
            <TextAreaField
              ref={callbackRefWithResizeHeight(ref)}
              rows={4}
              placeholder="ex.개발 기간이 짧아서 빠른 기간 내 런칭을 완료해야 했음"
              chipTitle="문제 상황"
              maxLength={100}
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
      </QuestionCard>
      <QuestionCard
        title="내가 취한 행동 또는 계획은 무엇이였나요?"
        subTitle="과제 해결 또는 목표 달성을 위한 구체적 행동과 이유를 작성해주세요">
        <Controller
          control={control}
          name="action"
          render={({ field: { ref, onChange, value } }) => (
            <TextAreaField
              ref={callbackRefWithResizeHeight(ref)}
              rows={4}
              placeholder="ex.개발 기간이 짧아서 빠른 기간 내 런칭을 완료해야 했음"
              chipTitle="나의 행동 또는 계획"
              maxLength={100}
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
      </QuestionCard>
      <QuestionCard
        title={
          <>
            그 결과 어떤 성과(객관적 사실, 정량적 수치)를 <br />
            이룰 수 있었나요?
          </>
        }
        subTitle="경험(행동)의 결과와 그로 인해 배운 점과 아쉬운 점 등을 작성해주세요">
        <Controller
          control={control}
          name="result"
          render={({ field: { ref, onChange, value } }) => (
            <TextAreaField
              ref={callbackRefWithResizeHeight(ref)}
              rows={4}
              placeholder="ex.4개월만에 출시에 성공하게 됨"
              chipTitle="결과 및 성과"
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

export default InformationPage;
