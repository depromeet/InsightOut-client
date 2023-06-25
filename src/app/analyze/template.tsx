'use client';

import React from 'react';

import { Route } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';
import { ROUTES } from '@/shared/constants/routes';

import { LayoutProps } from './layout';

const Template = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const { back } = useRouter();

  const handleNextButton = () => {
    switch (pathname) {
      case ROUTES.EXPERIENCE:
        return ROUTES.KEYWORD;
      case ROUTES.KEYWORD:
        return ROUTES.INFORMATION;
      case ROUTES.INFORMATION:
        return ROUTES.VERIFY;
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
              <Button type="button" variant="gray200" size="XL" onClick={back}>
                이전으로
              </Button>
            )}
            {pathname === ROUTES.VERIFY ? (
              <Button type="submit" variant="gray900" size="XL">
                경험카드 만들기
              </Button>
            ) : (
              <Link href={handleNextButton() as Route}>
                <Button type="button" variant="gray900" size="XL">
                  다음으로
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="experience mb-[16px] px-[14px] py-[32px] h-[500px] top-[88px] sticky">{/** aside */}</div>
      </div>
    </>
  );
};

export default Template;
