import React, { useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { Portal } from '@chakra-ui/react';
import { useChat } from 'ai/react';

import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Tag from '@/components/Tag/Tag';

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

const AIRecommendResume = () => {
  const { getValues, setValue } = useFormContext<ExperienceFormValues>();
  const [situation, task, action, result, recommendKeywordList, resume] = getValues([
    'situation',
    'task',
    'action',
    'result',
    'capabilities',
    'resume',
  ]);

  const { messages, setInput, handleSubmit } = useChat({
    body: {
      situation,
      task,
      action,
      result,
      recommendKeywordList: recommendKeywordList.map(({ keyword }) => keyword),
    },
    onFinish: ({ content }) => {
      // TODO: api를 통해 DB에 content 저장하기
      setValue('resume', content);
      setValue(`writeStatus.${STEP.verify - 1}`, '작성완료');
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (resume) return;
    setInput((prev) => prev + ' ');
    setTimeout(() => {
      inputRef.current?.click();
    }, 1000);
  }, [setInput, resume]);

  return (
    <>
      {messages.length > 0 ? (
        <QuestionCard
          title={
            <div className="h6">
              {renderRecommendKeyword(recommendKeywordList)}을 활용해
              <br />
              이렇게 자기소개서를 써보는건 어떨까요?
            </div>
          }
          subTitle="AI 자기소개서는 상단의 모아보기 탭에서 다시 확인할 수 있어요">
          <>
            <Tag variant="gray100" size="S" className="inline-block mb-2">
              AI 추천 자기소개서 예시
            </Tag>
            <div className="form p-[0px_16px_16px] min-h-[390px]">
              {messages.map((message) => (
                <div key={message.id} className="whitespace-pre-wrap">
                  {message.content}
                </div>
              ))}
            </div>
          </>
        </QuestionCard>
      ) : (
        <AIResumeLoading recommendKeywordList={recommendKeywordList} />
      )}
      <Portal>
        <form
          onSubmit={(e) => {
            e.stopPropagation();
            handleSubmit(e);
          }}
          className="hidden">
          <input ref={inputRef} type="submit" />
        </form>
      </Portal>
    </>
  );
};

export default AIRecommendResume;
