'use Client';
import React from 'react';

import { CircularProgress } from '@chakra-ui/react';

import QuestionCard from '@/components/QuestionCard/QuestionCard';

const PageLoading = () => {
  return (
    <QuestionCard title="">
      <div className="flex-center h-[700px]">
        <CircularProgress isIndeterminate color="primary.400" size={100} thickness={5} />
      </div>
    </QuestionCard>
  );
};

export default PageLoading;
