import isEmpty from 'lodash/isEmpty';

import instance from '@/apis';
import { ExperienceParams, ExperienceResponse } from '@/apis/analyze/types/experience';
import { objToQueryString } from '@/shared/utils/objToQueryString';

export const EXPEIENCE_API = {
  get: async (params: ExperienceParams['get']) => {
    const queryString = isEmpty(params) ? '' : `?${objToQueryString(params)}`;
    return await instance.get<ExperienceResponse, ExperienceResponse>(`/experience${queryString}`);
  },
  post: async ({ ...params }: ExperienceParams['post']) =>
    await instance.post<ExperienceResponse, ExperienceResponse>('/experience', params),
};
