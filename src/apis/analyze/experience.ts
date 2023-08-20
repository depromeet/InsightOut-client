import { ExperienceFormValues } from '@/features/analyze/types';

import instance from '..';
import type { ExperienceParams, ExperienceResponse } from './types/experience';

const experienceApi = {
  /**
   * 경험 단일 조회
   */
  get: async ({ experienceId }: ExperienceParams['get']) =>
    await instance.get<ExperienceResponse, ExperienceResponse>(`/experience/${experienceId}`),
  /**
   * 경험 정보 생성하기
   */
  post: async () => await instance.post<ExperienceResponse, ExperienceResponse>('/experience'),
  /**
   * 경험 정보 수정 (임시저장)
   */
  put: async ({ experienceId, ...params }: ExperienceParams['put']) =>
    await instance.put<ExperienceFormValues, ExperienceFormValues>(`/experience/${experienceId}`, params),
};

export default experienceApi;
