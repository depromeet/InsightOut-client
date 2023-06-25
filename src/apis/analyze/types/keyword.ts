import { Keyword } from '@/feature/analyze/types';

export type KeywordParams = {
  get: { experienceId: string };
  post: { keyword: string };
  update: { keyword: Keyword; experienceId: string };
};

export type keywordResponse = {
  get: {
    keyword: Keyword;
  };
  post: {
    id: number;
    keyword: string;
    userId: number;
  };
  update: { count: number };
};
