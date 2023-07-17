import { USER_API } from '@/shared/constants/api';

import instance from '..';
import { FeedbackContent, GetUserInfo, UpdateUserInfo } from './types/user';

const userApi = {
  /**
   * 유저 정보 조회
   */
  get: () => instance.get<unknown, GetUserInfo>(USER_API.GET_USER_INFO),
  /**
   * 유저 정보 업데이트
   */
  patch: (param: Partial<UpdateUserInfo>) => instance.patch<UpdateUserInfo, never>(USER_API.UPDATE_USER_INFO, param),
  /**
   * 피드백 제출
   */
  postFeedback: (param: FeedbackContent) => instance.post<FeedbackContent>(USER_API.POST_FEEDBACK, param),
};

export default userApi;
