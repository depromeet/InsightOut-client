import type { Keyword } from '@/feature/analyze/types';
import instance from '..';
import { KeywordParams } from './types/keyword';

const keywordApi = {
  get: ({ experienceId }: KeywordParams['get']) =>
    instance.get<Keyword, Keyword>(`/experience/capability/${experienceId}`),
  // 키워드 추가
  post: ({ keyword }: KeywordParams['post']) =>
    instance.post<Keyword, Keyword>('/experience/capability/keyword', { keyword }),
  // 임시저장
  update: () => instance.post<Keyword, Keyword>('/experience/capability'),
};

export default keywordApi;
