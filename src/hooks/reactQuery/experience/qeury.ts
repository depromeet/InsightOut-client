import { useInfiniteQuery, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { EXPERIENCE_API, EXPERIENCE_CAPABILITY_API, EXPERIENCE_COUNT_API } from '@/apis/experience/experience';
import {
  ExperienceCapabilityParams,
  ExperienceCapabilityResponse,
  ExperienceCountResponse,
  ExperienceParams,
  ExperiencesResponse,
} from '@/apis/experience/types/experience';
import { EXPERIENCE_CAPABILITY_KEY, EXPERIENCE_KEY } from '@/shared/constants/querykeys';

export const useGetExperiences = (
  params?: ExperienceParams['get'],
  options?: UseQueryOptions<ExperiencesResponse, AxiosError>
) =>
  useQuery<ExperiencesResponse, AxiosError>(
    EXPERIENCE_KEY.list([{ ...params }]),
    () => EXPERIENCE_API.get({ ...params }),
    {
      ...options,
    }
  );

export const useGetInfiniteExperiences = (params?: ExperienceParams['get']) =>
  useInfiniteQuery<ExperiencesResponse, AxiosError>(
    EXPERIENCE_KEY.list([{ ...params }]),
    ({ pageParam = 1 }) => EXPERIENCE_API.get({ ...params, page: pageParam }),
    {
      getNextPageParam: ({ meta: { hasNextPage, page } }) => (hasNextPage ? page + 1 : undefined),
    }
  );

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
