'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { DevTool } from '@hookform/devtools';
import { Route } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';
import Lottie from '@/components/Lottie/Lottie';
import Progress from '@/components/Progress/Progress';
import Stepper from '@/components/Stepper/Stepper';
import TooltipRelativeContent from '@/components/Tooltip/TooltipRelativeContent';
import { initialValue, STEPS } from '@/feature/analyze/constants';
import { ExperienceFormValues } from '@/feature/analyze/types';
import { useIsMounted } from '@/hooks/useIsMounted';
import { ROUTES } from '@/shared/constants/routes';

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { back } = useRouter();
  const methods = useForm({
    mode: 'all',
    defaultValues: initialValue,
  });

  const pathname = usePathname();
  const tooltipIndex = (STEPS.find((v) => v.route === pathname)?.id ?? 1) - 1;

  const TOOLTIP_CONTENTS = [
    <>“OOO님 좋은 시작이에요”</>,
    <>“뭐든지 시작이 반이에요”</>,
    <>“내용을 풍부하게 작성할수록 다양한 AI 직무 역량 키워드를 받을 수 있어요 최선을 다해 작성해주세요 :)”</>,
    <>“AI 직무역량 키워드 추천을 통해 나의 직무역량을 다각도로 넓혀보세요”</>,
  ];

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

  const isMounted = useIsMounted();

  const submit = (data: ExperienceFormValues) => {
    console.log({ data });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <div className="pt-[105px] mx-auto max-w-[1200px] h-[100%]">
          <div className="experience px-[90.5px] py-[40px] mb-[32px]">
            <Stepper />
          </div>
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

            {/* Aside */}
            <div className="experience flex flex-col items-center mb-[16px] px-[14px] py-[32px] h-[100%] top-[88px] sticky">
              <div className="mb-[8px]">
                <TooltipRelativeContent
                  type="primary"
                  position="center-top"
                  content={TOOLTIP_CONTENTS[tooltipIndex]}
                  isOpen
                />
              </div>
              <div className="w-[250px] h-[250px] mb-[24px]">
                <Lottie src="/lotties/lumos-smile.json" />
              </div>
              <Progress />
            </div>
          </div>
        </div>
        {isMounted && <DevTool control={methods.control} />}
      </form>
    </FormProvider>
  );
};

export default Layout;
