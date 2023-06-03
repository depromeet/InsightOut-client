'use client';

import React from 'react';
import QuestionCard from '@/components/QuestionCard/QuestionCard';

const Keyword = () => {
  return (
    <>
      <QuestionCard
        title="활동의 계기나 배경이 무엇인가요?"
        subTitle="구체적인 상황 정보(언제, 어디서, 누구와 어떻게 등) 처음 보는 사람도 이해갈 수 있도록 작성해주세요">
        <div>asd</div>
      </QuestionCard>
      <QuestionCard
        title="당시 해결해야하는 과제나 목표가 무엇이었나요?"
        subTitle="인식한 과제와 목표에 대해 작성해주세요">
        <div>asd</div>
      </QuestionCard>
      <QuestionCard
        title="내가 취한 행동 또는 계획은 무엇이였나요?"
        subTitle="과제 해결 또는 목표 달성을 위한 구체적 행동과 이유를 작성해주세요">
        <div>asd</div>
      </QuestionCard>
      <QuestionCard
        title={
          <>
            그 결과 어떤 성과(객관적 사실, 정량적 수치)를 <br />
            이룰 수 있었나요?
          </>
        }
        subTitle="경험(행동)의 결과와 그로 인해 배운 점과 아쉬운 점 등을 작성해주세요">
        <div>asd</div>
      </QuestionCard>
    </>
  );
};

export default Keyword;
