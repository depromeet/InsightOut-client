import { AxiosResponse, AxiosError } from 'axios';
import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/shared/constants/queryKey';

import { ResumeParams } from '../../types/resume';
import resumeApi from '../../resume';

const useUpdateResumeTitle = (
  resumeId: ResumeParams['patch']['resumeId'],
  options?: UseMutationOptions<AxiosResponse, AxiosError, ResumeParams['patch']['payload']['title']>
) => {
  const queryClient = useQueryClient();

  return useMutation((title) => resumeApi.patch({ resumeId, payload: { title } }), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.resumes] });
    },
  });
};

export default useUpdateResumeTitle;
