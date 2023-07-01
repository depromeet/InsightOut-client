import { ONBOARDING_API } from '@/shared/constants/api';
import instance from '..';
import { OnboardingInfo } from '@/shared/store/types/user';

const onboardingApi = {
  /**
   * 유저 정보 조회
   */
  get: () => instance.get<unknown, OnboardingInfo>(ONBOARDING_API.ONBOARDING),
  /**
   * 유저 정보 업데이트
   */
  patch: (param: Partial<OnboardingInfo>) => instance.patch<OnboardingInfo, never>(ONBOARDING_API.ONBOARDING, param),
};

export default onboardingApi;
