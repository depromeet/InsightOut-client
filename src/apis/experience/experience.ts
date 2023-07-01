import isEmpty from 'lodash/isEmpty';

import instance from '@/apis';
import {
  ExperienceCapabilityParams,
  ExperienceCapabilityResponse,
  ExperienceCountResponse,
  ExperienceParams,
  ExperienceResponse,
} from '@/apis/experience/types/experience';
import { objToQueryString } from '@/shared/utils/objToQueryString';

const EXPERIENCE_API_URL = '/experience';

export const EXPERIENCE_API = {
  get: async (params: ExperienceParams['get']) => {
    const queryString = isEmpty(params) ? '' : `?${objToQueryString(params)}`;
    return await instance.get<ExperienceResponse, ExperienceResponse>(EXPERIENCE_API_URL + queryString);
  },
  post: async ({ ...params }: ExperienceParams['post']) =>
    await instance.post<ExperienceResponse, ExperienceResponse>(EXPERIENCE_API_URL, params),
};

export const EXPERIENCE_CAPABILITY_API = {
  get: async (parmas: ExperienceCapabilityParams['get']) => {
    const { experienceId } = parmas;
    return await instance.get<ExperienceCapabilityParams['get'], ExperienceCapabilityResponse['get']>(
      `${EXPERIENCE_API_URL}/capalibity/${experienceId}`
    );
  },
};

export const EXPERIENCE_COUNT_API = {
  get: async () => await instance.get<null, ExperienceCountResponse['get']>(EXPERIENCE_API_URL + '/count'),
};
