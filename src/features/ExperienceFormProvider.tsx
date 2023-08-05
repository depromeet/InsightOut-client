'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/navigation';

import { useIsMounted } from '@/hooks/useIsMounted';
import { useExperienceId } from '@/shared/store/experienceId';

import { initialValue } from './analyze/constants';
import { ExperienceFormValues } from './analyze/types';

const ExperienceFormProvider = ({ children }: StrictPropsWithChildren) => {
  const { push } = useRouter();
  const isMounted = useIsMounted();

  const methods = useForm<ExperienceFormValues>({
    mode: 'all',
    defaultValues: initialValue,
  });
  const { experienceId } = useExperienceId();

  const submit = async (data: ExperienceFormValues) => {
    const { writeStatus } = data;
    const isReadyToSubmit = writeStatus?.slice(0, 3).every((status) => status === '작성완료');
    if (!isReadyToSubmit) {
      return;
    }

    push(`/completed-experience-card?experienceId=${experienceId}`);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>{children}</form>
      {isMounted && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

export default ExperienceFormProvider;
