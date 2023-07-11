import React from 'react';

import QuestionCard from '@/components/QuestionCard/QuestionCard';
import Spinner from '@/components/Spinner/Spinner';

import { CapabilitiesType } from '../types';
import { renderRecommendKeyword } from './page';

interface AIResumeLoadingProps {
  recommendKeywordList: CapabilitiesType[];
}

const AIResumeLoading = ({ recommendKeywordList }: AIResumeLoadingProps) => {
  return (
    <QuestionCard.Container>
      <div className="flex flex-col items-center">
        <Spinner size="L" style="secondary500" className="mb-[24px]" />
        <span className="text-center whitespace-pre subhead4">
          {renderRecommendKeyword(recommendKeywordList)}
          {`을 활용해 \nAI 자기소개서를 작성중이에요`}
        </span>
      </div>
    </QuestionCard.Container>
  );
};

export default AIResumeLoading;
