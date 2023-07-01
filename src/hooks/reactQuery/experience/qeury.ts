import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { EXPERIENCE_COUNT_API } from '@/apis/experience/experience';
import { ExperienceCountResponse } from '@/apis/experience/types/experience';
import { EXPERIENCE_KEY } from '@/shared/constants/querykeys';

export const useGetExperienceCount = (options?: UseQueryOptions<ExperienceCountResponse['get'], AxiosError>) =>
  useQuery<ExperienceCountResponse['get'], AxiosError>(EXPERIENCE_KEY.count(), () => EXPERIENCE_COUNT_API.get(), {
    ...options,
  });
