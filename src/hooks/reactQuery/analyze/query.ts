'use client';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ANALYZE_KEY } from '@/shared/constants/querykeys';
import { ExperienceParams, ExperienceResponse } from '@/apis/analyze/types/experience';
import experienceApi from '@/apis/analyze/experience';
import { AxiosError } from 'axios';
import { useIsSignedIn } from '@/features/auth/store';

export const useFetchAnalyze = (
  params?: ExperienceParams['get'],
  options?: UseQueryOptions<ExperienceResponse, AxiosError>
) => {
  const isSignIn = useIsSignedIn();
  return useQuery<ExperienceResponse, AxiosError>(
    ANALYZE_KEY.detail([{ ...params }]),
    () => experienceApi.get({ ...params }),
    {
      ...options,
      staleTime: Infinity,

      enabled: isSignIn && options?.enabled,
      onSuccess(data) {
        options?.onSuccess?.(data);
      },
    }
  );
};
