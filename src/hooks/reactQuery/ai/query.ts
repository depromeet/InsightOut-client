import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import aiApi from '@/apis/ai/ai';
import { CountResponse } from '@/apis/resume/types/count';
import { AI_KEY } from '@/shared/constants/querykeys';

export const useGetAiRecommendCount = (options?: UseQueryOptions<CountResponse['get'], AxiosError>) => {
  return useQuery<CountResponse['get'], AxiosError>(AI_KEY.count(), () => aiApi.count(), { ...options });
};
