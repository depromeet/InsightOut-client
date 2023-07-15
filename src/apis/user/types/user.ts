import { JSXElementConstructor, ReactElement } from 'react';

import { Field } from '@/shared/constants/user';
import { UserInfo } from '@/shared/store/types/user';

/**
 * 유저 정보 조회 결과
 */
export type GetUserInfo = Pick<UserInfo, 'nickname' | 'email' | 'imageUrl' | 'field'>;

/**
 * 유저 정보 업데이트 시 전달할 데이터
 */
export interface UpdateUserInfo {
  nickname: string;
  field: Field;
}

/**
 * 유저 피드백 데이터
 */
export interface FeedbackContent {
  contents: string;
}

/**
 * 유저 직무 데이터
 */
export type JobCategories = readonly {
  title: string;
  icon: ReactElement<SVGAElement, string | JSXElementConstructor<any>>;
  field: Field;
}[];
