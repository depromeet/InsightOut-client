import { AxiosError } from 'axios';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { RESUME_KEY } from '@/shared/constants/querykeys';

import resumeApi from '@/apis/resume/resume';
import { ResumeResponse } from '@/apis/resume/types/resume';

export const useGetResumes = (options?: UseQueryOptions<ResumeResponse['get'], AxiosError>) => {
  return useQuery<ResumeResponse['get'], AxiosError>([RESUME_KEY.lists()], () => resumeApi.get(), { ...options });
};
