import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import keywordApi from '@/apis/analyze/keyword';
import { KeywordParams, keywordResponse } from '@/apis/analyze/types/keyword';
import { KEYWORD_KEY } from '@/shared/constants/querykeys';

export const useCreateKeyword = (
  options?: UseMutationOptions<keywordResponse['post'], AxiosError, KeywordParams['post']>
) => {
  const queryClient = useQueryClient();
  return useMutation(({ keyword }) => keywordApi.post({ keyword }), {
    ...options,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries(KEYWORD_KEY.lists());
      options?.onSuccess?.(data, variables, context);
    },
  });
};

export const useUpdateKeyword = (
  { experienceId }: { experienceId: number },
  options?: UseMutationOptions<keywordResponse['update'], AxiosError, KeywordParams['update']>
) => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ keywords }) =>
      keywordApi.update({
        experienceId,
        keywords,
      }),
    {
      ...options,
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries(KEYWORD_KEY.list([{ experienceId }]));
        options?.onSuccess?.(data, variables, context);
      },
    }
  );
};
