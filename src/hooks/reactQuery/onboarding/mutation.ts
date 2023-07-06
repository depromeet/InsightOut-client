import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import onboardingApi from '@/apis/onboarding/onboarding';
import { OnboardingInfo } from '@/shared/store/types/user';

export const useUpdateOnboarding = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, Partial<OnboardingInfo>>
) => {
  return useMutation((param) => onboardingApi.patch(param), {
    ...options,
  });
};
