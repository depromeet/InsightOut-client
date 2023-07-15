import { Route } from 'next';

export const ROUTES = {
  HOME: '/',
  EXPERIENCE: '/analyze/experience',
  INFORMATION: '/analyze/information',
  KEYWORD: '/analyze/keyword',
  VERIFY: '/analyze/verify',
  COMPLETE: '/analyze/complete',
  RESUMES: '/resumes',
  MY_PAGE: '/mypage',
  TERMS_OF_SERVICE: 'https://holly-inch-d57.notion.site/939d0171ea104886aab53840837db174',
  PRIVACY_POLICY: 'https://holly-inch-d57.notion.site/123e4efd7e7f4de088beced76df417a7',
} as const;

export const SIGN_UP_ROUTES = {
  SIGN_UP: '?steps=signUp' as Route,
  WELCOME: '?steps=welcome' as Route,
  CATEGORIES: '?steps=categories' as Route,
  START_NOW: '?steps=startnow' as Route,
} as const;
