'use client';

import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { useRouter } from 'next/navigation';

import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Tag from '@/components/Tag/Tag';
import AICapabilityKeyword from '@/features/analyze/verify/AICapabilityKeyword';
import SelectedKeywordContainer from '@/features/analyze/verify/SelectedKeywordContainer';
import { useUserNickname } from '@/shared/store/user';

import { STEP } from '../constants';
import { ExperienceFormValues } from '../types';
import AIRecommendResume from './AIRecommendResume';

const VerifyPage = () => {
  const { back, prefetch } = useRouter();
  const username = useUserNickname();

  const { getValues, setValue } = useFormContext<ExperienceFormValues>();
  const [situation, task, action, result, keywordList, recommendKeywordList, writeStatus] = getValues([
    'situation',
    'task',
    'action',
    'result',
    'keywords',
    'capabilities',
    'writeStatus',
  ]);

  useEffect(() => {
    prefetch('/completed-experience-card');
  }, [prefetch]);

  useEffect(() => {
    const isReadyToAIRecommendation = writeStatus?.slice(0, 3).every((status) => status === '작성완료');
    if (!isReadyToAIRecommendation) back();
    else if (writeStatus?.[STEP.verify - 1] === '작성완료') return;
    else setValue(`writeStatus.${STEP.verify - 1}`, '작성중');
  }, [back, setValue, writeStatus]);

  return (
    <>
      <QuestionCard title={<AICapabilityKeyword recommendKeywordList={recommendKeywordList} />}>
        <>
          <TextAreaField
            readOnly
            autoSize
            rows={10}
            placeholder="ex.개발 기간이 짧아서 빠른 기간 내 런칭을 완료해야 했음"
            chipTitle={`${username}님의 IT동아리 협업`}
            maxLength={400}
            value={`${situation}\n\n${task}\n\n${action}\n\n${result}`}
          />
          <SelectedKeywordContainer>
            {keywordList.map(
              ([keyword, isSetected]) =>
                isSetected === true && (
                  <Tag key={keyword} variant="primary50-outline" size="L">
                    {keyword}
                  </Tag>
                )
            )}
          </SelectedKeywordContainer>
        </>
      </QuestionCard>
      <AIRecommendResume />
    </>
  );
};

export default VerifyPage;
