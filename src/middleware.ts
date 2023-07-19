import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ROUTES } from './shared/constants/routes';
import { COLLECTION_TABS } from './shared/constants/tabs';

export const middleware = (request: NextRequest) => {
  // 경험분해 라우팅 가드
  if (request.nextUrl.pathname.startsWith('/analyze')) {
    const [, , step] = request.nextUrl.pathname.split('/');
    if (Boolean(step)) return NextResponse.redirect(new URL(`/analyze/${step}`, request.nextUrl));
    return NextResponse.redirect(new URL(ROUTES.EXPERIENCE, request.nextUrl));
  }

  // 모아보기 라우팅 가드
  if (request.nextUrl.pathname.startsWith('/collection')) {
    const [, , tab] = request.nextUrl.pathname.split('/');
    if (!tab) return NextResponse.redirect(new URL('/collection/' + COLLECTION_TABS[0].pathname, request.nextUrl));
  }

  /**
   * 자기소개서 라우팅 가드
   * - questionId가 숫자 문자열이 아닌 다른 문자열인 경우 /resumes로 리다이렉트합니다.
   *
   * @example
   * /resumes/123 -> /resumes/123
   * /resumes/undefined -> /resumes
   * /resumes -> /resumes
   */
  if (request.nextUrl.pathname.startsWith('/resumes')) {
    const [, , questionId] = request.nextUrl.pathname.split('/');
    const isAllNumberString = (string: string) => /^\d+$/.test(string);

    if (questionId && !isAllNumberString(questionId))
      return NextResponse.redirect(new URL(ROUTES.RESUMES, request.nextUrl));
  }
};

export const config = {
  matcher: [
    '/analyze',
    '/analyze/(experience|information|keyword|verify)/:path+',
    '/collection',
    '/collection/(experience|resumes|ai-recommends)/:path+',
    '/resumes',
    '/resumes/:path+',
  ],
};
