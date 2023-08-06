'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useDisclosure } from '@chakra-ui/react';

import { ErrorMessage } from '@/components/Input/ErrorMessage';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import TextField from '@/components/Input/TextField/TextField';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import PickerFieldContainer from '@/features/analyze/experience/PickerFieldContainer';
import { ExperienceFormValues } from '@/features/analyze/types';
import { useUpdateOnboarding } from '@/hooks/reactQuery/onboarding/mutation';
import { useGetOnboarding } from '@/hooks/reactQuery/onboarding/query';
import { useUserActions, useUserNickname, useUserOnboarding } from '@/shared/store/user';
import { callbackRefWithResizeHeight } from '@/shared/utils/callbackRefWithResizeHeight';

import OnboardingModal from '../modal/OnboardingModal';

const ExperiencePage = () => {
  const {
    control,
    setFocus,
    trigger,
    formState: { errors },
  } = useFormContext<ExperienceFormValues>();
  const username = useUserNickname();
  const userOnboarding = useUserOnboarding();
  const { setUserInfo } = useUserActions();
  const { isOpen: isOnBoardingModalOpen, onOpen: onBoardingModalOpen, onClose: onBoardingModalClose } = useDisclosure();
  const { data, isSuccess } = useGetOnboarding({
    onSuccess: ({ experience }) => {
      if (!experience) onBoardingModalOpen();
    },
  });
  const { mutate: updateExperienceOnboarding } = useUpdateOnboarding();

  const handlePeriodChange =
    (
      // eslint-disable-next-line unused-imports/no-unused-vars
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
      maxLength: number,
      name: keyof ExperienceFormValues
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const valueLength = e.target.value.length;
      if (valueLength >= maxLength) {
        setFocus(name);
        if (valueLength > maxLength) return;
      }
      onChange(e);
    };

  const handleClickOnboardingButton = () => {
    updateExperienceOnboarding({ experience: true });
    setUserInfo({ onboarding: { ...userOnboarding, experience: true } });
    onBoardingModalClose();
  };

  return (
    <>
      <QuestionCard title="경험의 제목과 기간을 입력해주세요">
        <>
          <Controller
            control={control}
            name="title"
            render={({ field: { ref, onChange, value } }) => (
              <TextAreaField
                ref={callbackRefWithResizeHeight(ref)}
                rows={1}
                placeholder="ex.00직무 디자인 인턴"
                chipTitle="경험 제목"
                maxLength={50}
                onChange={onChange}
                value={value || ''}
              />
            )}
          />
          <PickerFieldContainer>
            <Controller
              control={control}
              name="startYYYY"
              render={({ field: { ref, onChange, value }, formState: { errors } }) => (
                <TextField
                  type="number"
                  ref={ref}
                  placeholder="YYYY"
                  maxLength={4}
                  onChange={handlePeriodChange(
                    (e) => {
                      /**@note endYYYY 유효성 검증에 의존하는 값인데 startYYYY 값을 변경할 때 endYYYY 검증 스키마를 trigger 할 수가 없어서 해당 값 변경 시 trigger */
                      trigger('endYYYY');
                      onChange(e);
                    },
                    4,
                    'startMM'
                  )}
                  value={value || ''}
                  error={!!errors.startYYYY}
                />
              )}
            />
            <Controller
              control={control}
              name="startMM"
              render={({ field: { ref, onChange, value }, formState: { errors } }) => (
                <TextField
                  type="number"
                  ref={ref}
                  placeholder="MM"
                  maxLength={2}
                  onChange={handlePeriodChange(
                    (e) => {
                      /**@note endMM 유효성 검증에 의존하는 값인데 startMM 값을 변경할 때 endMM 검증 스키마를 trigger 할 수가 없어서 해당 값 변경 시 trigger */
                      trigger('endMM');
                      onChange(e);
                    },
                    2,
                    'endYYYY'
                  )}
                  value={value || ''}
                  error={!!errors.startMM}
                />
              )}
            />
            <Controller
              control={control}
              name="endYYYY"
              render={({ field: { ref, onChange, value }, formState: { errors } }) => (
                <TextField
                  type="number"
                  ref={ref}
                  placeholder="YYYY"
                  onChange={handlePeriodChange(onChange, 4, 'endMM')}
                  maxLength={4}
                  value={value || ''}
                  error={!!errors.endYYYY}
                />
              )}
            />
            <Controller
              control={control}
              name="endMM"
              render={({ field: { ref, onChange, value }, formState: { errors } }) => (
                <TextField
                  type="number"
                  ref={ref}
                  placeholder="MM"
                  onChange={handlePeriodChange(onChange, 2, 'experienceRole')}
                  maxLength={2}
                  value={value || ''}
                  error={!!errors.endMM}
                />
              )}
            />
          </PickerFieldContainer>
          <ErrorMessage className="relative flex-col ml-0">
            {Object.values(errors).map(({ message }, index) => (
              <span key={index}>{message}</span>
            ))}
          </ErrorMessage>
        </>
      </QuestionCard>
      <QuestionCard title="내가 맡았던 역할은 무엇인가요?">
        <Controller
          control={control}
          name="experienceRole"
          render={({ field: { ref, onChange, value } }) => (
            <TextAreaField
              ref={callbackRefWithResizeHeight(ref)}
              rows={1}
              placeholder="ex.UIUX 디자이너"
              chipTitle="나의 역할"
              maxLength={20}
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
      </QuestionCard>
      <QuestionCard title="그것을 왜 무엇 때문에 하게 됐나요?">
        <Controller
          control={control}
          name="motivation"
          render={({ field: { ref, onChange, value } }) => (
            <TextAreaField
              ref={callbackRefWithResizeHeight(ref)}
              rows={4}
              placeholder="ex.개발자와 협업역량을 기르기 위해 하게 됨"
              chipTitle="경험 수행 이유"
              maxLength={100}
              onChange={onChange}
              value={value || ''}
            />
          )}
        />
      </QuestionCard>
      {isSuccess && !data.experience && (
        <OnboardingModal
          isOpen={isOnBoardingModalOpen}
          nickname={username}
          onClose={onBoardingModalClose}
          onClickMainButton={handleClickOnboardingButton}
        />
      )}
    </>
  );
};

export default ExperiencePage;
