import { Route } from 'next';
import { StaticImageData } from 'next/image';
import logical from 'public/images/capabilites/logical.png';
import performance from 'public/images/capabilites/performance.png';
import relationship from 'public/images/capabilites/relationship.png';
import selfBased from 'public/images/capabilites/self_based.png';

import { ROUTES } from '@/shared/constants/routes';

import { PageTextcontent, ResumeTitle } from '../types';

export const ANSWER_MAX_LENGTH = 2000;

type CapabilitiesImage = Record<string, StaticImageData>;

export const CAPABILITYES_IMAGE: CapabilitiesImage = {
  고객지향성: relationship,
  갈등관리: relationship,
  커뮤니케이션: relationship,
  팀워크: relationship,
  리더십: performance,
  도전정신: performance,
  목표달성력: performance,
  추진력: performance,
  의사결정능력: performance,
  '체계적 사고': logical,
  혁신사고력: logical,
  '전략적 사고력': logical,
  분석능력: logical,
  책임감: selfBased,
  기획력: selfBased,
  문제해결력: selfBased,
  계획력: selfBased,
  자기계발: selfBased,
  설득력: selfBased,
  창의력: selfBased,
  주도성: selfBased,
  수리감각: selfBased,
  정보수집능력: selfBased,
} as const;

export const EXPERIENCE_SORT_BY = { startDate: '경험시간순', createdAt: '작성시간순' };

export const MESSAGE = {
  NOT_HAS_TITLE: '제목이 없는 자기소개서',
  NOT_HAS_PERIOD: '경험 기간이 없습니다😅',
  NOT_HAS_CAPACITY_KEYWORDS: ['직무역량 없습니다'],
  NOT_HAS_AI_RECOMMEND_KEYWORDS: ['직무역량 없습니다'],
  DELETE_EXPERIENCE_CARD_TITLE: '[경험제목]\n카드를 삭제하실건가요?',
  DELETE_EXPERIENCE_CARD_SUBTITLE: '삭제한 카드는 다시 복구할 수 없어요',
};

export const INITIAL_RESUME: ResumeTitle = {
  createdAt: '',
  id: 0,
  updatedAt: '',
  title: '',
};

export const ALL_CAPABILITY_KEYWORD = '전체';

export const PAGE_TEXTCONTENT: PageTextcontent = {
  experiences: {
    keyword: '경험카드',
    subMessage: '경험분해부터 시작해볼까요?',
    buttonText: '경험분해',
    redirectUrl: ROUTES.EXPERIENCE,
  },
  resumes: {
    keyword: '자기소개서',
    subMessage: '자기소개서 작성하러 가볼까요?',
    buttonText: '자기소개서',
    redirectUrl: ROUTES.RESUMES_UNDEFINED as Route,
  },
  'ai-recommends': {
    keyword: '추천받은 자기소개서',
    subMessage:
      '경험분해를 하면 AI의 직무 역량 키워드 추천과 자기소개서 제안을 받을 수 있어요. \n경험분해를 시작해볼까요?',
    buttonText: '경험분해',
    redirectUrl: ROUTES.EXPERIENCE,
  },
};
