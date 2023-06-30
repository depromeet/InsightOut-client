'use client';

import React, { useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Route } from 'next';
import Button from '@/components/Button/Button';
import { ROUTES } from '@/shared/constants/routes';
import { usePathname, useRouter } from 'next/navigation';
import Stepper from '@/components/Stepper/Stepper';
import { useIsMounted } from '@/hooks/useIsMounted';
import { DevTool } from '@hookform/devtools';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { STEPS, initialValue } from '@/feature/analyze/constants';
import { ExperienceFormValues, WriteStatusType } from '@/feature/analyze/types';
import TooltipRelativeContent from '@/components/Tooltip/TooltipRelativeContent';
import Lottie from '@/components/Lottie/Lottie';
import Progress from '@/components/Progress/Progress';
import StepMenu from '@/feature/analyze/layout/StepMenu';
// import { useFetchAnalyze } from '@/hooks/reactQuery/analyze/query';
import { usePrevious } from '@chakra-ui/react';

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { back } = useRouter();
  const pathname = usePathname();
  const prevPathname = usePrevious(pathname);

  const currentStepIndex = (STEPS.find((v) => v.route === pathname)?.id ?? 1) - 1;
  const prevStepIndex = (STEPS.find((v) => v.route === prevPathname)?.id ?? 1) - 1;

  const methods = useForm({
    mode: 'all',
    defaultValues: initialValue,
  });

  const writeStatus = useWatch({
    name: 'writeStatus',
    control: methods.control,
  });

  // const { data } = useFetchAnalyze(
  //   {},
  //   {
  //     onSuccess: (data) => {
  //       const { setValue } = methods;
  //       const [endYYYY, endMM] = data.endDate.split('-');
  //       const [startYYYY, startMM] = data.startDate.split('-');
  //       setValue('title', data.title);
  //       setValue('startYYYY', startYYYY);
  //       setValue('startMM', startMM);
  //       setValue('endYYYY', endYYYY);
  //       setValue('endMM', endMM);
  //       setValue('experienceRole', data.experienceInfo?.experienceRole);
  //       setValue('motivation', data.experienceInfo?.motivation);
  //     },
  //   }
  // );

  const TOOLTIP_CONTENTS = [
    `“000님 좋은 시작이에요”`,
    '“뭐든지 시작이 반이에요”',
    '“내용을 풍부하게 작성할수록 다양한 AI 직무 역량 키워드를 받을 수 있어요 최선을 다해 작성해주세요 :)”',
    '“AI 직무역량 키워드 추천을 통해 나의 직무역량을 다각도로 넓혀보세요”',
  ];

  const setWriteStatus = useCallback(
    (target: WriteStatusType[], status: WriteStatusType) => {
      target[prevStepIndex] = status;
      methods.setValue('writeStatus', target);
    },
    [methods, prevStepIndex]
  );

  useEffect(() => {
    const writeStatus = methods.getValues('writeStatus') as WriteStatusType[];
    const copyWriteStatus = [...writeStatus];

    switch (prevPathname) {
      case ROUTES.EXPERIENCE:
        const experiencePageValues = methods.getValues([
          'title',
          'startYYYY',
          'startMM',
          'endYYYY',
          'endMM',
          'experienceRole',
          'motivation',
        ]);
        if (experiencePageValues.every((v) => !!v)) {
          setWriteStatus(copyWriteStatus, '작성완료');
        } else if (experiencePageValues.some((v) => !!v)) {
          setWriteStatus(copyWriteStatus, '작성중');
        } else {
          setWriteStatus(copyWriteStatus, '미작성');
        }
        break;
      case ROUTES.KEYWORD:
        const keywords = methods.getValues('keywords');
        if (keywords.some(([, isSelected]) => isSelected === true)) {
          setWriteStatus(copyWriteStatus, '작성완료');
        } else {
          setWriteStatus(copyWriteStatus, '미작성');
        }
        break;
      case ROUTES.INFORMATION:
        const informationPageValues = methods.getValues(['situation', 'task', 'action', 'result']);
        if (informationPageValues.every((v) => !!v)) {
          setWriteStatus(copyWriteStatus, '작성완료');
        } else if (informationPageValues.some((v) => !!v)) {
          setWriteStatus(copyWriteStatus, '작성중');
        } else {
          setWriteStatus(copyWriteStatus, '미작성');
        }
        break;
      default:
        const [capabilities, resume] = methods.getValues(['capabilities', 'resume']);
        if (!!capabilities.length && !!resume) {
          setWriteStatus(copyWriteStatus, '작성완료');
        } else if (!!capabilities.length || !!resume) {
          setWriteStatus(copyWriteStatus, '작성중');
        } else {
          setWriteStatus(copyWriteStatus, '미작성');
        }
        break;
    }
  }, [methods, pathname, prevPathname, currentStepIndex, setWriteStatus]);

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
            <div className="experience flex flex-col items-center min-w-[384px] mb-[16px] px-[14px] py-[32px] h-[100%] top-[88px] sticky">
              <div className="mb-[8px]">
                <TooltipRelativeContent
                  type="primary"
                  position="center-top"
                  content={TOOLTIP_CONTENTS[currentStepIndex]}
                  isOpen
                />
              </div>
              <div className="w-[250px] h-[250px] mb-[24px]">
                <Lottie src="/lotties/lumos-smile.json" />
              </div>
              <Progress />
              <StepMenu status={writeStatus as WriteStatusType[]} />
            </div>
          </div>
        </div>
        {isMounted && <DevTool control={methods.control} />}
      </form>
    </FormProvider>
  );
};

export default Layout;
