import { PropsWithChildren } from 'react';

import classNames from 'classnames';
import { Metadata } from 'next';
import localFont from 'next/font/local';

import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
import ChakraUIProvider from '@/components/Providers/ChakraProvider';
import TanstackQueryProvider from '@/components/Providers/TanstackQueryProvider';
import META from '@/shared/constants/metadata';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(META.DOMAIN_URL),
  title: {
    default: META.TITLE,
    template: `%s | ${META.SITE_NAME}`,
  },
  description: META.DESCRIPTION,
  keywords: [...META.KEYWORD],
  openGraph: {
    title: META.TITLE,
    description: META.DESCRIPTION,
    siteName: META.SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    url: META.DOMAIN_URL,
  },
  verification: {
    google: META.GOOGLE_VERIFICATION,
  },
  twitter: {
    title: META.TITLE,
    description: META.DESCRIPTION,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <body
        className={classNames(pretendard.className, 'bg-[#f5f5f5]')}
        suppressContentEditableWarning
        suppressHydrationWarning>
        <GoogleAnalytics />
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
