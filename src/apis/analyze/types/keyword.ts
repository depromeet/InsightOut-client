import { Keyword } from '@/feature/analyze/types';

export type KeywordParams = {
  get: { experienceId: number };
  post: { keyword: string };
  update: { keywords: Keyword; experienceId?: number };
};

export type keywordResponse = {
  get: Keyword;
  post: {
    id: number;
    keyword: string;
    userId: number;
  };
  update: { count: number };
};
