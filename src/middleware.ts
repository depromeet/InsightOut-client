import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { COLLECTION_TABS } from './app/shared/constants/tabs';

export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith('/collection')) {
    const [, , tab] = request.nextUrl.pathname.split('/');
    if (!tab) return NextResponse.redirect(new URL('/collection/' + COLLECTION_TABS[0].pathname, request.nextUrl));
  }
};
