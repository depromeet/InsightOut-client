import { USER_API } from '@/shared/constants/api';
import { Field } from '@/shared/constants/user';

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
  patch: async (param: Partial<UpdateUserInfo>) => {
    const field = param.field === Field.NOT_SELECTED ? null : param.field;
    return await instance.patch<UpdateUserInfo, UpdateUserInfo>(USER_API.UPDATE_USER_INFO, {
      nickname: param.nickname,
      field,
    });
  },
  /**
   * 피드백 제출
   */
  postFeedback: () => instance.post<FeedbackContent>(USER_API.POST_FEEDBACK),
};

export default userApi;
