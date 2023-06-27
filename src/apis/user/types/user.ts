import { UserInfo } from '@/shared/store/types/user';

/**
 * 유저 정보 조회 결과
 */
export type GetUserInfo = Pick<UserInfo, 'nickname' | 'email' | 'imageUrl'>;

/**
 * 유저 정보 업데이트 시 전달할 데이터
 */
export interface UpdateUserInfo {
  nickname: string;
  field: string;
}

/**
 * 유저 피드백 데이터
 */
export interface FeedbackContent {
  contents: string;
}
