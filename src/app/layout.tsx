import { PropsWithChildren } from 'react';

import classNames from 'classnames';
import { Metadata } from 'next';
import localFont from 'next/font/local';

import ChakraUIProvider from '@/components/Providers/ChakraProvider';
import TanstackQueryProvider from '@/components/Providers/TanstackQueryProvider';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '인사이트아웃 | AI기반 역량 키워드 추천 및 자기소개서 작성 서비스',
    template: '%s | 인사이트아웃',
  },
  description:
    '자기소개서 작성으로 고민이신가요? 경험 분해부터 AI기반 역량키워드 추천 및 자기소개서 작성까지 취업 준비 과정의 고민을 인사이트아웃에서 해결해보세요.',
  keywords: ['자기소개서', '자소서', '직무역량', '직무경험', '경험분해', 'chatgpt', 'gpt자소서', 'ai자소서'],
  openGraph: {
    title: '인사이트아웃 | AI기반 역량 키워드 추천 및 자기소개서 작성 서비스',
    description:
      '자기소개서 작성으로 고민이신가요? 경험 분해부터 AI기반 역량키워드 추천 및 자기소개서 작성까지 취업 준비 과정의 고민을 인사이트아웃에서 해결해보세요.',
  },
  verification: {
    google: 'google',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body
        className={classNames(pretendard.className, 'bg-[#f5f5f5]')}
        suppressContentEditableWarning
        suppressHydrationWarning>
        <TanstackQueryProvider>
          <ChakraUIProvider>{children}</ChakraUIProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  );
}

export const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
