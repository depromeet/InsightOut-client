import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import onboardingApi from '@/apis/onboarding/onboarding';
import { OnboardingInfo } from '@/shared/store/types/user';

export const useUpdateOnboarding = (
  options?: UseMutationOptions<OnboardingInfo, AxiosError, Partial<OnboardingInfo>>
) => {
  return useMutation((param) => onboardingApi.patch(param), {
    ...options,
  });
};
