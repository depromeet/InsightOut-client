import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import aiApi from '@/apis/ai/ai';
import { AiParams, AiResponse } from '@/apis/ai/types/ai';
import { AI_KEY } from '@/shared/constants/querykeys';

export const useCreateRecommendKeyword = (
  options?: UseMutationOptions<AiResponse['keyword'], AxiosError, AiParams['keyword']>
) => {
  const queryClient = useQueryClient();
  return useMutation((payload) => aiApi.keyword(payload), {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(AI_KEY.list(['keyword']));
      options?.onSuccess?.(data, variables, context);
    },
  });
};

export const useCreateRecommendResume = (
  options?: UseMutationOptions<AiResponse['resume'], AxiosError, AiParams['resume']>
) => {
  const queryClient = useQueryClient();
  return useMutation((payload) => aiApi.resume(payload), {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(AI_KEY.list(['resume']));
      options?.onSuccess?.(data, variables, context);
    },
  });
};

export const useSubmitExperience = (
  options?: UseMutationOptions<AiResponse['submit'], AxiosError, AiParams['submit']>
) => {
  return useMutation((payload) => aiApi.submit(payload), {
    ...options,
    onSuccess: (data, variables, context) => {
      options?.onSuccess?.(data, variables, context);
    },
  });
};
