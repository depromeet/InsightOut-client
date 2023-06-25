'use client';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import experienceApi from '@/apis/analyze/experience';
import { ExperienceParams, ExperienceResponse } from '@/apis/analyze/types/experience';
import { ANALYZE_KEY } from '@/shared/constants/querykeys';

export const useFetchAnalyze = (
  params?: ExperienceParams['get'],
  options?: UseQueryOptions<ExperienceResponse, AxiosError>
) => {
  return useQuery<ExperienceResponse, AxiosError>(
    ANALYZE_KEY.detail([{ ...params }]),
    () => experienceApi.get({ ...params }),
    {
      ...options,
      staleTime: Infinity,
      onSuccess(data) {
        options?.onSuccess?.(data);
      },
    }
  );
};
