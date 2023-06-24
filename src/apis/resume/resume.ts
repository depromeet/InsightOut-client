import instance from '@/apis';
import { ResumeParams } from './types/resume';

const API_URL = '/resumes';

const resumeApi = {
  get: () => instance.get(API_URL),
  post: () => instance.post(API_URL),
  patch: ({ resumeId, payload }: ResumeParams['patch']) => instance.patch(`${API_URL}/${resumeId}`, payload),
  delete: ({ resumeId }: ResumeParams['delete']) => instance.delete(`${API_URL}/${resumeId}`),
};

export default resumeApi;
