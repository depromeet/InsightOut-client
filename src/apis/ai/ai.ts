import { objToQueryString } from '@/shared/utils/objToQueryString';

import instance from '..';
import { AiParams, AiResponse } from './types/ai';

const aiApi = {
  /**
   * ChatGPT 추천 키워드 생성
   */
  keyword: async (payload: AiParams['keyword']) =>
    await instance.post<AiResponse['keyword'], AiResponse['keyword']>('/ai/keyword', payload),
  /**
   * ChatGPT 추천 자기소개서 생성
   */
  resume: async (payload: AiParams['resume']) =>
    await instance.post<AiResponse['resume'], AiResponse['resume']>('/ai/resume', payload),
  /**
   * 경험 제출
   */
  submit: async (payload: AiParams['submit']) =>
    await instance.post<AiResponse['submit'], AiResponse['submit']>('/ai/experience-card', payload),
  /**
   * 추천 자기소개서 개수 조회
   */
  count: async () => await instance.get<AiResponse['count'], AiResponse['count']>('/ai/ai-resume/count'),

  aiResume: async (aiKeyword: AiParams['aiKeyword']) => {
    const query = aiKeyword ? objToQueryString(aiKeyword) : '';
    return await instance.get<AiResponse['AiResume'], AiResponse['AiResume']>(`${'/ai/ai-resume' + query}`);
  },
};

export default aiApi;
