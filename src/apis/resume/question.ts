import instance from '@/apis';

import { QuestionParams, QuestionResponse } from './types/question';

const API_URL = '/resumes/questions';

const questionApi = {
  get: async ({ questionId }: QuestionParams['get']) =>
    await instance.get<QuestionResponse['get'], QuestionResponse['get']>(`${API_URL}/${questionId}`),
  post: async ({ payload }: QuestionParams['post']) => await instance.post(API_URL, payload),
  patch: async ({ questionId, payload }: QuestionParams['patch']) =>
    await instance.patch(`${API_URL}/${questionId}`, payload),
  delete: async ({ questionId }: QuestionParams['delete']) => await instance.delete(`${API_URL}/${questionId}`),
};

export default questionApi;
