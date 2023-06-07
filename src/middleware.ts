import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
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
};

export const config = {
  matcher: ['/analyze', '/analyze/(experience|information|keyword|verify)/:path+',
           '/collection', '/collection/(experience|resumes|ai-recommends)/:path+'],
};
