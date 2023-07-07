import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import resumeCountApi from '@/apis/resume/count';
import resumeApi from '@/apis/resume/resume';
import resumeTitleApi from '@/apis/resume/title';
import { CountResponse } from '@/apis/resume/types/count';
import { ResumeParams, ResumeResponse } from '@/apis/resume/types/resume';
import { TitleResponse } from '@/apis/resume/types/title';
import { RESUME_KEY } from '@/shared/constants/querykeys';

export const useGetResumes = (options?: UseQueryOptions<ResumeResponse['get'], AxiosError>) => {
  return useQuery<ResumeResponse['get'], AxiosError>(RESUME_KEY.lists(), () => resumeApi.get(), {
    ...options,
  });
};

export const useGetResume = (
  params: ResumeParams['getById'],
  options?: UseQueryOptions<ResumeResponse['getById'], AxiosError>
) => {
  return useQuery<ResumeResponse['getById'], AxiosError>(
    RESUME_KEY.detail([{ ...params }]),
    () => resumeApi.getById(params),
    {
      ...options,
    }
  );
};

export const useGetResumesCount = (options?: UseQueryOptions<CountResponse['get'], AxiosError>) => {
  return useQuery<CountResponse['get'], AxiosError>(RESUME_KEY.count(), () => resumeCountApi.get(), { ...options });
};

export const useGetResumesTitle = (options?: UseQueryOptions<TitleResponse['get'], AxiosError>) => {
  return useQuery<TitleResponse['get'], AxiosError>([RESUME_KEY.all, 'title'], () => resumeTitleApi.get(), {
    ...options,
  });
};
