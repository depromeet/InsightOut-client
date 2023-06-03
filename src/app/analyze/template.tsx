'use client';

import React from 'react';
import { LayoutProps } from './layout';
import Button from '@/components/Button/Button';
import { ROUTES } from '@/shared/constants/routes';
import { usePathname, useRouter } from 'next/navigation';

const Template = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const { push, back } = useRouter();

  const handleNextButton = () => {
    switch (pathname) {
      case ROUTES.EXPERIENCE:
        push(ROUTES.INFORMATION);
        break;
      case ROUTES.INFORMATION:
        push(ROUTES.KEYWORD);
        break;
      case ROUTES.KEYWORD:
        push(ROUTES.VERIFY);
        break;
      case ROUTES.VERIFY:
        push(ROUTES.COMPLETE);
        break;
      default:
        break;
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
            <Button variant="primary" size="xl" onClick={handleNextButton}>
              {pathname === ROUTES.VERIFY ? '경험카드 만들기' : '다음으로'}
            </Button>
          </div>
        </div>
        <div className="experience mb-[16px] px-[14px] py-[32px] h-[500px] top-[32px] sticky">{/** aside */}</div>
      </div>
    </>
  );
};

export default Template;
