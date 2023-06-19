import { AxiosResponse, AxiosError } from 'axios';
import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/shared/constants/queryKey';

import { ResumeParams } from '../../types/resume';
import resumeApi from '../../resume';

const useDeleteResume = (options?: UseMutationOptions<AxiosResponse, AxiosError, ResumeParams['delete']>) => {
  const queryClient = useQueryClient();

  return useMutation((resumeId) => resumeApi.delete(resumeId), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.resumes] });
    },
  });
};

export default useDeleteResume;
