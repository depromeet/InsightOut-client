import { ResumeTitle } from '../types';

export const EXPERIENCE_SORT_BY = { EXPERIENCE_TIME: '경험시간순', UPDATED_AT: '작성시간순' };

export const MESSAGE = {
  HAS_NOT_TITLE: '제목이 없는 자기소개서',
  HAS_NOT_PERIOD: '경험 기간이 없습니다😅',
  DELETE_EXPERIENCE_CARD_TITLE: '[경험제목]\n카드를 삭제하실건가요?',
  DELETE_EXPERIENCE_CARD_SUBTITLE: '삭제한 카드는 다시 복구할 수 없어요',
};
export const ANSWER_MAX_LENGTH = 2000;

export const INITIAL_RESUME: ResumeTitle = {
  createdAt: '',
  id: -100,
  updatedAt: '',
  title: '',
};
