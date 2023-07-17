import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import aiApi from '@/apis/ai/ai';
import { AiParams, AiResponse } from '@/apis/ai/types/ai';
import { AI_KEY } from '@/shared/constants/querykeys';

export const useGetAiRecommendCount = (options?: UseQueryOptions<AiResponse['count'], AxiosError>) => {
  return useQuery<AiResponse['count'], AxiosError>(AI_KEY.count(), () => aiApi.count(), { ...options });
};

export const useGetAiResumes = (
  params?: AiParams['aiKeyword'],
  options?: UseQueryOptions<AiResponse['AiResume'], AxiosError>
) => {
  return useQuery<AiResponse['AiResume'], AxiosError>(AI_KEY.detail([{ ...params }]), () => aiApi.aiResume(params), {
    ...options,
  });
};
