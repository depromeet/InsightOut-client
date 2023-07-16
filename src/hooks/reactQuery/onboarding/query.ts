import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import onboardingApi from '@/apis/onboarding/onboarding';
import { ONBOARDING_KEY } from '@/shared/constants/querykeys';
import { OnboardingInfo } from '@/shared/store/types/user';

export const useGetOnboarding = (options?: UseQueryOptions<OnboardingInfo, AxiosError>) =>
  useQuery<OnboardingInfo, AxiosError>(ONBOARDING_KEY.lists(), () => onboardingApi.get(), {
    ...options,
  });
