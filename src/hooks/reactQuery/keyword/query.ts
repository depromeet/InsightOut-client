import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import keywordApi from '@/apis/analyze/keyword';
import { KeywordParams, keywordResponse } from '@/apis/analyze/types/keyword';
import { KEYWORD_KEY } from '@/shared/constants/querykeys';

export const useGetKeywordList = (
  { experienceId }: KeywordParams['get'],
  options?: UseQueryOptions<keywordResponse['get'], AxiosError>
) => {
  return useQuery<keywordResponse['get'], AxiosError>(
    KEYWORD_KEY.list([{ experienceId }]),
    () => keywordApi.get({ experienceId }),
    {
      ...options,
      onSuccess: (data) => {
        options?.onSuccess?.(data);
      },
    }
  );
};
