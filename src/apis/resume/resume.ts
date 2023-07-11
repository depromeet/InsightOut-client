import instance from '@/apis';

import { ResumeParams, ResumeResponse } from './types/resume';

const API_URL = '/resumes';

const resumeApi = {
  get: async () => await instance.get<ResumeResponse['get'], ResumeResponse['get']>(API_URL),
  getById: async ({ resumeId }: ResumeParams['getById']) => {
    const pathname = resumeId ? `/${resumeId}` : '';
    return await instance.get<ResumeResponse['getById'], ResumeResponse['getById']>(`${API_URL + pathname}`);
  },
  post: async () => await instance.post<ResumeResponse['post'], ResumeResponse['post']>(API_URL),
  patch: async ({ resumeId, payload }: ResumeParams['patch']) =>
    await instance.patch(`${API_URL}/${resumeId}`, payload),
  delete: async ({ resumeId }: ResumeParams['delete']) => await instance.delete(`${API_URL}/${resumeId}`),
};

export default resumeApi;
