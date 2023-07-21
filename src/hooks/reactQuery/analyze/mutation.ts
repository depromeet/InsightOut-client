import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import experienceApi from '@/apis/analyze/experience';
import { ExperienceResponse } from '@/apis/analyze/types/experience';
import { ExperienceFormValues } from '@/features/analyze/types';
import { ANALYZE_KEY } from '@/shared/constants/querykeys';

export const useCreateExperience = (options?: UseMutationOptions<ExperienceResponse, AxiosError>) => {
  const queryClient = useQueryClient();
  return useMutation(experienceApi.post, {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(ANALYZE_KEY.details());
      options?.onSuccess?.(data, variables, context);
    },
  });
};

export const useUpdateExperience = (
  experienceId: number,
  options?: UseMutationOptions<Partial<ExperienceFormValues>, AxiosError, Partial<ExperienceFormValues>>
) => {
  const queryClient = useQueryClient();
  return useMutation((params) => experienceApi.put({ experienceId, ...params }), {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(ANALYZE_KEY.detail([{ experienceId }]));
      options?.onSuccess?.(data, variables, context);
    },
  });
};
