import isEmpty from 'lodash/isEmpty';

import instance from '@/apis';
import {
  ExperienceCapabilityParams,
  ExperienceCapabilityResponse,
  ExperienceCountResponse,
  ExperienceParams,
  ExperiencesResponse,
} from '@/apis/experience/types/experience';
import { objToQueryString } from '@/shared/utils/objToQueryString';

const EXPERIENCE_API_URL = '/experience';

export const EXPERIENCE_API = {
  get: async (params?: ExperienceParams['get']) => {
    const queryString = isEmpty(params) ? '' : `?${objToQueryString(params)}`;
    return await instance.get<ExperiencesResponse, ExperiencesResponse>(EXPERIENCE_API_URL + queryString);
  },
  getById: async ({ id }: ExperienceParams['get']) => {
    return await instance.get<ExperiencesResponse, ExperiencesResponse>(`${EXPERIENCE_API_URL}/${id}`);
  },
  delete: async ({ experienceId }: ExperienceParams['delete']) => {
    return await instance.delete(`${EXPERIENCE_API_URL}/${experienceId}`);
  },
};

export const EXPERIENCE_CAPABILITY_API = {
  get: async ({ experienceId, isCompleted }: ExperienceCapabilityParams['get']) => {
    const queryString = isCompleted ? `?${objToQueryString({ isCompleted })}` : '';
    return await instance.get<ExperienceCapabilityParams['get'], ExperienceCapabilityResponse['get']>(
      `${EXPERIENCE_API_URL}/capability${experienceId ? '/' + experienceId : ''}` + queryString
    );
  },
};

export const EXPERIENCE_COUNT_API = {
  get: async () => await instance.get<null, ExperienceCountResponse['get']>(EXPERIENCE_API_URL + '/count'),
};
