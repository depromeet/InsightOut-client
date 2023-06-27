/**
 * 유저 정보 조회 결과
 */
export interface UserInfo {
  nickname: string;
  email: string;
  imageUrl: string;
}

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
