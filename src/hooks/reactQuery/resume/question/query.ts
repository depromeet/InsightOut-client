import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import questionApi from '@/apis/resume/question';
import { QuestionParams, QuestionResponse } from '@/apis/resume/types/question';
import { QUESTION_KEY } from '@/shared/constants/querykeys';

export const useGetQuestion = (
  params: QuestionParams['get'],
  options?: UseQueryOptions<QuestionResponse['get'], AxiosError>
) => {
  return useQuery<QuestionResponse['get'], AxiosError>(
    QUESTION_KEY.detail([{ ...params }]),
    () => questionApi.get({ ...params }),
    { ...options }
  );
};
