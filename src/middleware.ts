import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from './shared/constants/routes';

export const middleware = (request: NextRequest) => {
  // 경험분해 라우팅 가드
  if (request.nextUrl.pathname.startsWith('/analyze')) {
    const [, , step] = request.nextUrl.pathname.split('/');
    if (Boolean(step)) return NextResponse.redirect(new URL(`/analyze/${step}`, request.nextUrl));
    return NextResponse.redirect(new URL(ROUTES.EXPERIENCE, request.nextUrl));
  }
};

export const config = {
  matcher: ['/analyze', '/analyze/(experience|information|keyword|verify)/:path+'],
};
