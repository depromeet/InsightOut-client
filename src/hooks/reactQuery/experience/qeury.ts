import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { EXPERIENCE_CAPABILITY_API, EXPERIENCE_COUNT_API } from '@/apis/experience/experience';
import {
  ExperienceCapabilityParams,
  ExperienceCapabilityResponse,
  ExperienceCountResponse,
} from '@/apis/experience/types/experience';
import { EXPERIENCE_CAPABILITY_KEY, EXPERIENCE_KEY } from '@/shared/constants/querykeys';

export const useGetExperienceCount = (options?: UseQueryOptions<ExperienceCountResponse['get'], AxiosError>) =>
  useQuery<ExperienceCountResponse['get'], AxiosError>(EXPERIENCE_KEY.count(), () => EXPERIENCE_COUNT_API.get(), {
    ...options,
  });

export const useGetExperienceCapabilities = (
  params?: ExperienceCapabilityParams['get'],
  options?: UseQueryOptions<ExperienceCapabilityResponse['get'], AxiosError>
) =>
  useQuery<ExperienceCapabilityResponse['get'], AxiosError>(
    EXPERIENCE_CAPABILITY_KEY.lists(),
    () => EXPERIENCE_CAPABILITY_API.get({ ...params }),
    {
      ...options,
    }
  );
