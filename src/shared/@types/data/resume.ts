import { QuestionData } from './question';

export interface ResumeData {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  questions: QuestionData[];
}
