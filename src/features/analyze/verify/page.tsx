'use client';

import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import isNumber from 'lodash/isNumber';
import { useRouter } from 'next/navigation';

import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Tag from '@/components/Tag/Tag';
import AICapabilityKeyword from '@/features/analyze/verify/AICapabilityKeyword';
import SelectedKeywordContainer from '@/features/analyze/verify/SelectedKeywordContainer';
import { useCreateRecommendResume } from '@/hooks/reactQuery/ai/mutation';
import { useUserNickname } from '@/shared/store/user';

import { STEP } from '../constants';
import { CapabilitiesType, ExperienceFormValues } from '../types';
import AIResumeLoading from './AIResumeLoading';

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
  const { back, prefetch } = useRouter();
  const username = useUserNickname();
  const { getValues, setValue } = useFormContext<ExperienceFormValues>();
  const [situation, task, action, result, keywordList, experienceId, recommendKeywordList, resume, writeStatus] =
    getValues([
      'situation',
      'task',
      'action',
      'result',
      'keywords',
      'experienceId',
      'capabilities',
      'resume',
      'writeStatus',
    ]);

  const { mutateAsync: createRecommendResume, isLoading: isRecommendResumeLoading } = useCreateRecommendResume();

  useEffect(() => {
    prefetch('/completed-experience-card');
  }, [prefetch]);

  useEffect(() => {
    const isReadyToAIRecommendation = writeStatus?.slice(0, 3).every((status) => status === '작성완료');
    if (!isReadyToAIRecommendation) back();
    else if (writeStatus?.[STEP.verify - 1] === '작성완료') return;
    else setValue(`writeStatus.${STEP.verify - 1}`, '작성중');
  }, [back, setValue, writeStatus]);

  useEffect(() => {
    if (resume) return;
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
        setValue(`writeStatus.${STEP.verify - 1}`, '작성완료');
      }
    })();
  }, [action, experienceId, result, situation, task, setValue, createRecommendResume, recommendKeywordList, resume]);

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
      {isRecommendResumeLoading ? (
        <AIResumeLoading recommendKeywordList={recommendKeywordList} />
      ) : (
        <QuestionCard
          title={
            <div className="h6">
              {renderRecommendKeyword(recommendKeywordList)}을 활용해
              <br />
              이렇게 자기소개서를 써보는건 어떨까요?
            </div>
          }
          subTitle="AI 자기소개서는 상단의 모아보기 탭에서 다시 확인할 수 있어요">
          <TextAreaField
            readOnly
            autoSize
            rows={10}
            placeholder="ex.개발 기간이 짧아서 빠른 기간 내 런칭을 완료해야 했음"
            chipTitle="AI 추천 자기소개서 예시"
            maxLength={1000}
            value={resume}
          />
        </QuestionCard>
      )}
    </>
  );
};

export default VerifyPage;
