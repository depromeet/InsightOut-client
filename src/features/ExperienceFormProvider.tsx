'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

import { useIsMounted } from '@/hooks/useIsMounted';
import { useExperienceId } from '@/shared/store/experienceId';

import { initialValue } from './analyze/constants';
import { CapabilitiesType, ExperienceFormValues, KeywordEntriesType, WriteStatusType } from './analyze/types';

const ExperienceFormProvider = ({ children }: StrictPropsWithChildren) => {
  const { push } = useRouter();
  const isMounted = useIsMounted();

  const methods = useForm<ExperienceFormValues>({
    mode: 'all',
    defaultValues: initialValue,
    resolver: yupResolver(schema),
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

const yearSchema = yup.string().optional().min(4, '연도를 입력해주세요 (ex. 2023)');
const monthSchema = yup
  .string()
  .optional()
  .min(2, '월을 입력해주세요 (ex. 09)')
  .matches(/(0[1-9]|1[0-2])/, '정확한 날짜를 입력해주세요');

const schema = yup.object().shape({
  experienceId: yup.number().required(),
  title: yup.string().required(),
  experienceRole: yup.string().required(),
  motivation: yup.string().required(),

  startYYYY: yearSchema,
  startMM: monthSchema,
  startDate: yup.string().required(),

  endYYYY: yearSchema.test('dateRules', '종료 기간은 시작 기간과 같거나 이후여야 합니다', (value, { resolve }) => {
    const startYYYY = resolve(yup.ref<string>('startYYYY'));
    if (!value?.trim() || !startYYYY) return;
    return value.length === 4 && startYYYY.length === 4 && value >= startYYYY;
  }),
  endMM: monthSchema.test('dateRules', '종료 기간은 시작 기간과 같거나 이후여야 합니다', (value, { resolve }) => {
    const startMM = resolve(yup.ref<string>('startMM'));
    if (!value?.trim() || !startMM) return;
    return value.length === 2 && startMM.length === 2 && value >= startMM;
  }),
  endDate: yup.string().required(),

  keywords: yup.mixed<KeywordEntriesType>().required(),
  situation: yup.string().required(),
  task: yup.string().required(),
  action: yup.string().required(),
  result: yup.string().required(),
  experienceStatus: yup.string().required(),
  writeStatus: yup.mixed<WriteStatusType[]>().optional(),
  capabilities: yup.mixed<CapabilitiesType[]>().required(),
  resume: yup.string().required(),
});
