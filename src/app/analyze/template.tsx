'use client';

import React from 'react';
import { LayoutProps } from './layout';
import Button from '@/components/Button/Button';
import { ROUTES } from '@/shared/constants/routes';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Route } from 'next';
import { FormProvider, useForm } from 'react-hook-form';
import { ExperienceFormValues } from '@/feature/analyze/analyze.types';
import { initialValue } from '@/feature/analyze/analyze.constants';

import { DevTool } from '@hookform/devtools';
import { useIsMounted } from '@/hooks/useIsMounted';

const Template = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const { back } = useRouter();
  const isMounted = useIsMounted();

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: initialValue,
  });

  const submit = (data: ExperienceFormValues) => {
    console.log({ data });
  };

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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <div className="experience h-[250px] px-[90.5px] py-[85px] mb-[32px]">{/** stepper */}</div>
        <div className="flex flex-row">
          <div className="min-w-[770px] mr-[46px] mb-[32px]">
            {children}
            <div className="flex-center mt-[32px] gap-[12px]">
              {pathname === ROUTES.EXPERIENCE ? null : (
                <Button type="button" variant="tertiary" size="xl" onClick={back}>
                  이전으로
                </Button>
              )}
              {pathname === ROUTES.VERIFY ? (
                <Button type="submit" variant="primary" size="xl">
                  경험카드 만들기
                </Button>
              ) : (
                <Link href={handleNextButton() as Route}>
                  <Button type="button" variant="primary" size="xl">
                    다음으로
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="experience mb-[16px] px-[14px] py-[32px] h-[500px] top-[32px] sticky">{/** aside */}</div>
        </div>
      </form>
      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default Template;
