import { AxiosResponse, AxiosError } from 'axios';
import { UseMutationOptions, useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '@/shared/constants/queryKey';

import resumeApi from '../../resume';

const useCreateResume = (options?: UseMutationOptions<AxiosResponse, AxiosError>) => {
  const queryClient = useQueryClient();

  return useMutation(resumeApi.post, {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.resumes] });
    },
  });
};

export default useCreateResume;
