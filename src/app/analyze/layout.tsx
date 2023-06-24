'use client';

import { DevTool } from '@hookform/devtools';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { initialValue } from '@/feature/analyze/constants';
import { ExperienceFormValues } from '@/feature/analyze/types';
import { useIsMounted } from '@/hooks/useIsMounted';

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: initialValue,
  });

  const isMounted = useIsMounted();

  const submit = (data: ExperienceFormValues) => {
    console.log({ data });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <div className="pt-[105px] mx-auto max-w-[1200px] h-[100%]">{children}</div>
        {isMounted && <DevTool control={methods.control} />}
      </form>
    </FormProvider>
  );
};

export default Layout;
