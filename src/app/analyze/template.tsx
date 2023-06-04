'use client';

import React from 'react';
import { LayoutProps } from './layout';
import Button from '@/components/Button/Button';
import { ROUTES } from '@/shared/constants/routes';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Template = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const { back } = useRouter();

  const nextHref = () => {
    switch (pathname) {
      case ROUTES.EXPERIENCE:
        return ROUTES.INFORMATION;
      case ROUTES.INFORMATION:
        return ROUTES.KEYWORD;
      case ROUTES.KEYWORD:
        return ROUTES.VERIFY;
      case ROUTES.VERIFY:
        return ROUTES.COMPLETE;
      default:
        return ROUTES.EXPERIENCE;
    }
  };

  return (
    <>
      <div className="experience h-[250px] px-[90.5px] py-[85px] mb-[32px]">{/** stepper */}</div>
      <div className="flex flex-row">
        <div className="min-w-[770px] mr-[46px] mb-[32px]">
          {children}
          <div className="flex-center mt-[32px] gap-[12px]">
            {pathname === ROUTES.EXPERIENCE ? null : (
              <Button variant="tertiary" size="xl" onClick={back}>
                이전으로
              </Button>
            )}
            <Link href={nextHref()}>
              <Button variant="primary" size="xl">
                {pathname === ROUTES.VERIFY ? '경험카드 만들기' : '다음으로'}
              </Button>
            </Link>
          </div>
        </div>
        <div className="experience mb-[16px] px-[14px] py-[32px] h-[500px] top-[32px] sticky">{/** aside */}</div>
      </div>
    </>
  );
};

export default Template;
