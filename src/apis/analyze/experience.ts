import isEmpty from 'lodash/isEmpty';
import instance from '..';
import { ExperienceParams, ExperienceResponse } from './types/experience';
import { objToQueryString } from '@/shared/utils/objToQueryString';

const experienceApi = {
  get: async (params: ExperienceParams['get']) => {
    const queryString = isEmpty(params) ? '' : `?${objToQueryString(params)}`;
    return await instance.get<ExperienceResponse, ExperienceResponse>(`/experience${queryString}`);
  },
  post: async ({ ...params }: ExperienceParams['post']) =>
    await instance.post<ExperienceResponse, ExperienceResponse>('/experience', params),
};

export default experienceApi;
