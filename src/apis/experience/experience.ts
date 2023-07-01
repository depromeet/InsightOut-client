import isEmpty from 'lodash/isEmpty';

import instance from '@/apis';
import { ExperienceCapabilityResponse, ExperienceParams, ExperienceResponse } from '@/apis/experience/types/experience';
import { objToQueryString } from '@/shared/utils/objToQueryString';

const EXPERIENCE_API_URL = '/experience';

export const EXPEIENCE_API = {
  get: async (params: ExperienceParams['get']) => {
    const queryString = isEmpty(params) ? '' : `?${objToQueryString(params)}`;
    return await instance.get<ExperienceResponse, ExperienceResponse>(EXPERIENCE_API_URL + queryString);
  },
  post: async ({ ...params }: ExperienceParams['post']) =>
    await instance.post<ExperienceResponse, ExperienceResponse>(EXPERIENCE_API_URL, params),
};

export const EXPEIENCE_CAPABILITY_API = {
  get: async () => await instance.get<null, ExperienceCapabilityResponse>(EXPERIENCE_API_URL + '/capalibity'),
};
