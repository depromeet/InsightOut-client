import { ResumeData } from '@/features/resume/types/resume';

export type ResumeParams = {
  get: { resumeId?: number };
  patch: { resumeId: number; payload: { title: string } };
  delete: { resumeId: number };
};

export interface ResumeResponse {
  get: ResumeData[];
}
