export interface QuestionData {
  id: number;
  title: string;
  answer: string;
  updatedAt: string;
}

export interface SpellCheckData {
  id: number;
  error: string;
  correct: string;
  errorContext: string;
}

export type SpellCheckResult = 'idle' | 'loading' | 'correct' | 'error';
