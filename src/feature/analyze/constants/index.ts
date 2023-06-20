import { ROUTES } from '@/shared/constants/routes';

import { ExperienceFormValues } from '../types';

export const initialValue: ExperienceFormValues = {
  experienceId: null,
  title: '',
  experienceRole: '',
  motivation: '',
  startDate: '',
  endDate: '',
  situation: '',
  task: '',
  action: '',
  result: '',
  experienceStatus: 'INPROGRESS',
};

export const STEP = {
  experience: 1,
  keyword: 2,
  information: 3,
  verify: 4,
} as const;

export const STEPS = [
  {
    id: STEP.experience,
    title: '경험정보',
    route: ROUTES.EXPERIENCE,
  },
  {
    id: STEP.keyword,
    title: '직무역량 키워드',
    route: ROUTES.KEYWORD,
  },
  {
    id: STEP.information,
    title: '경험내용',
    route: ROUTES.INFORMATION,
  },
  {
    id: STEP.verify,
    title: 'AI 직무역량 추천',
    route: ROUTES.VERIFY,
  },
];
