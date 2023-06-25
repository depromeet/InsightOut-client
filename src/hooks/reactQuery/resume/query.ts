import { useQuery,UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import resumeApi from '@/apis/resume/resume';
import { ResumeResponse } from '@/apis/resume/types/resume';
import { RESUME_KEY } from '@/shared/constants/querykeys';

export const useGetResumes = (options?: UseQueryOptions<ResumeResponse['get'], AxiosError>) => {
  return useQuery<ResumeResponse['get'], AxiosError>([RESUME_KEY.lists()], () => resumeApi.get(), { ...options });
};
