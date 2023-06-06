'use client';

import React from 'react';
import QuestionCard from '@/components/QuestionCard/QuestionCard';

const Verify = () => {
  return (
    <>
      <QuestionCard title={<div>ai 직무 역량 키워드 컴포넌트</div>}>
        <div>asd</div>
      </QuestionCard>
      <QuestionCard
        title={
          <>
            [랜덤닉네임]님의 역량을
            <br />
            00직무에 어떻게 활용할 수 있을까요?
          </>
        }>
        <div>asd</div>
      </QuestionCard>
    </>
  );
};

export default Verify;
