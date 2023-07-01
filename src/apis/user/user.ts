import { USER_API } from '@/shared/constants/api';

import instance from '..';
import { FeedbackContent, UpdateUserInfo, UserInfo } from './types/user';

const userApi = {
  /**
   * 유저 정보 조회
   */
  get: () => instance.get<UserInfo>(USER_API.GET_USER_INFO),
  /**
   * 유저 정보 업데이트
   */
  patch: () => instance.patch<UpdateUserInfo>(USER_API.UPDATE_USER_INFO),
  /**
   * 피드백 제출
   */
  postFeedback: () => instance.post<FeedbackContent>(USER_API.POST_FEEDBACK),
};

export default userApi;
