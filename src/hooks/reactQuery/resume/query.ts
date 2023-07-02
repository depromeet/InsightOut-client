import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import resumeCountApi from '@/apis/resume/count';
import resumeApi from '@/apis/resume/resume';
import { CountResponse } from '@/apis/resume/types/count';
import { ResumeResponse } from '@/apis/resume/types/resume';
import { RESUME_KEY } from '@/shared/constants/querykeys';

export const useGetResumes = (options?: UseQueryOptions<ResumeResponse['get'], AxiosError>) => {
  return useQuery<ResumeResponse['get'], AxiosError>(RESUME_KEY.lists(), () => resumeApi.get(), { ...options });
};

export const useGetResumesCount = (options?: UseQueryOptions<CountResponse['get'], AxiosError>) => {
  return useQuery<CountResponse['get'], AxiosError>(RESUME_KEY.count(), () => resumeCountApi.get(), { ...options });
};
