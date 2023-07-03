import { isEmpty } from 'lodash';

import instance from '@/apis';
import { objToQueryString } from '@/shared/utils/objToQueryString';

import { ResumeParams, ResumeResponse } from './types/resume';

const API_URL = '/resumes';

const resumeApi = {
  get: async (params: ResumeParams['get']) => {
    const queryString = isEmpty(params) ? '' : `?${objToQueryString(params)}`;
    return await instance.get<ResumeResponse['get'], ResumeResponse['get']>(`${API_URL + '/' + queryString}`);
  },
  post: async () => await instance.post(API_URL),
  patch: async ({ resumeId, payload }: ResumeParams['patch']) =>
    await instance.patch(`${API_URL}/${resumeId}`, payload),
  delete: async ({ resumeId }: ResumeParams['delete']) => await instance.delete(`${API_URL}/${resumeId}`),
};

export default resumeApi;
