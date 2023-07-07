'use client';

import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import isNumber from 'lodash/isNumber';

import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Tag from '@/components/Tag/Tag';
import AICapabilityKeyword from '@/feature/analyze/verify/AICapabilityKeyword';
import SelectedKeywordContainer from '@/feature/analyze/verify/SelectedKeywordContainer';
import { useCreateRecommendResume } from '@/hooks/reactQuery/ai/mutation';

import { CapabilitiesType, ExperienceFormValues } from '../types';

export const renderRecommendKeyword = (arr: CapabilitiesType[]) => {
  if (arr.length === 1) return <span className="text-secondary-500">{arr?.[0]?.keyword}</span>;
  return (
    <span>
      <span className="text-secondary-500">{arr?.[0]?.keyword}</span>과&nbsp;
      <span className="text-secondary-500">{arr?.[1]?.keyword}</span>
    </span>
  );
};

const VerifyPage = () => {
  const { getValues, setValue } = useFormContext<ExperienceFormValues>();
  const [situation, task, action, result, keywordList, experienceId, recommendKeywordList, resume] = getValues([
    'situation',
    'task',
    'action',
    'result',
    'keywords',
    'experienceId',
    'capabilities',
    'resume',
  ]);

  const { mutateAsync: createRecommendResume, isLoading: isRecommendResumeLoading } = useCreateRecommendResume();

  useEffect(() => {
    (async () => {
      if (!!situation && !!task && !!action && !!result && isNumber(experienceId)) {
        const { resume } = await createRecommendResume({
          experienceId,
          capabilityIds: recommendKeywordList.map(({ id }) => id).slice(0, 2),
          situation,
          task,
          action,
          result,
        });
        setValue('resume', resume);
      }
    })();
  }, [action, experienceId, result, situation, task, setValue, createRecommendResume, recommendKeywordList]);

  return (
    <>
      <QuestionCard title={<AICapabilityKeyword recommendKeywordList={recommendKeywordList} />}>
        <>
          <TextAreaField
            readOnly
            autoSize
            rows={10}
            placeholder="ex.개발 기간이 짧아서 빠른 기간 내 런칭을 완료해야 했음"
            chipTitle="OOO님의 IT동아리 협업"
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
      <QuestionCard
        title={
          <div className="h6">
            {renderRecommendKeyword(recommendKeywordList)}을 활용해
            <br />
            이렇게 자기소개서를 써보는건 어떨까요?
          </div>
        }
        subTitle="AI 자기소개서는 상단의 모아보기 탭에서 다시 확인할 수 있어요">
        {isRecommendResumeLoading ? (
          <div>loading...</div>
        ) : (
          <TextAreaField
            readOnly
            autoSize
            rows={10}
            placeholder="ex.개발 기간이 짧아서 빠른 기간 내 런칭을 완료해야 했음"
            chipTitle="AI 추천 자기소개서 예시"
            maxLength={1000}
            value={resume}
          />
        )}
      </QuestionCard>
    </>
  );
};

export default VerifyPage;
