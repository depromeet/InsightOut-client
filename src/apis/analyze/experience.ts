import isEmpty from 'lodash/isEmpty';
import instance from '..';
import { ExperienceParams, ExperienceResponse } from './types/experience';

/**
 * @example
 * params = { last: true, capabilityId: 1, situation: true }
 * console.log(objToQueryString(params)) // 'last=true&capabilityId=1&situation=true'
 */
const objToQueryString = (obj: Object) =>
  Object.entries(obj)
    .map((param) => param.join('='))
    .join('&');

const experienceApi = {
  get: async (params: ExperienceParams['get']) => {
    const queryString = isEmpty(params) ? '' : `?${objToQueryString(params)}`;
    return await instance.get<ExperienceResponse, ExperienceResponse>(`/experience${queryString}`);
  },
  post: async ({ ...params }: ExperienceParams['post']) =>
    await instance.post<ExperienceResponse, ExperienceResponse>('/experience', params),
};

export default experienceApi;
