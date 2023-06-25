import { QuestionData } from '@/features/resume/types/question';

export type QuestionParams = {
  get: { questionId: number | string };
  post: { payload: { resumeId: number } };
  patch: { questionId: number; payload: { title: string; answer: string } };
  delete: { questionId: number };
};

export interface QuestionResponse {
  get: QuestionData;
}
