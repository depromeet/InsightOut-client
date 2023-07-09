import instance from '..';
import { KeywordParams, keywordResponse } from './types/keyword';

const keywordApi = {
  /**
   * 키워드 단일 조회
   */
  get: ({ experienceId }: KeywordParams['get']) =>
    instance.get<keywordResponse['get'], keywordResponse['get']>(`/experience/capability/${experienceId}`),
  /**
   * 키워드 추가하기
   */
  post: ({ keyword }: KeywordParams['post']) =>
    instance.post<keywordResponse['post'], keywordResponse['post']>('/experience/capability/keyword', { keyword }),
  /**
   * 임시저장
   */
  update: ({ experienceId, keywords }: KeywordParams['update']) =>
    instance.post<keywordResponse['update'], keywordResponse['update']>('/experience/capability', {
      experienceId,
      keywords,
    }),
};

export default keywordApi;
