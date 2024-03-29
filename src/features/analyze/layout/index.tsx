'use client';

import React, { useCallback, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useDisclosure, usePrevious } from '@chakra-ui/react';
import isNumber from 'lodash/isNumber';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';
import Lottie from '@/components/Lottie/Lottie';
import Progress from '@/components/Progress/Progress';
import Stepper from '@/components/Stepper/Stepper';
import TooltipRelativeContent from '@/components/Tooltip/TooltipRelativeContent';
import { STEPS } from '@/features/analyze/constants';
import StepMenu from '@/features/analyze/layout/StepMenu';
import AI진입조건모달 from '@/features/analyze/modal/BaseDialog';
import 경험분석로딩모달 from '@/features/analyze/modal/LoadingModal';
import PrevNextButton from '@/features/analyze/PrevNextButton/PrevNextButton';
import { ExperienceFormValues, WriteStatusType } from '@/features/analyze/types';
import SavingCaption from '@/features/resume/components/ResumeForm/SavingCaption';
import { useCreateRecommendKeyword } from '@/hooks/reactQuery/ai/mutation';
import { useCreateExperience, useUpdateExperience } from '@/hooks/reactQuery/analyze/mutation';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';
import { useUpdateKeyword } from '@/hooks/reactQuery/keyword/mutation';
import useBeforUnload from '@/hooks/useBeforeUnload';
import { useOnceFlag } from '@/hooks/useOnceFlag';
import { ROUTES } from '@/shared/constants/routes';
import { useBoolean } from '@/shared/store/boolean';
import { useExperienceId } from '@/shared/store/experienceId';
import { useUserNickname } from '@/shared/store/user';
import formatYYMMDDhhmm from '@/shared/utils/date/formatYYMMDDhhmm';

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const prevPathname = usePrevious(pathname);
  const [usedOnce, disableOnceFlag] = useOnceFlag();
  const username = useUserNickname();
  const { getValues, setValue, control } = useFormContext<ExperienceFormValues>();

  const { experienceId, setExperienceId, resetExperienceId } = useExperienceId();

  const { isOpen: isAI진입조건모달Open, onOpen: AI진입조건모달Open, onClose: AI진입조건모달Close } = useDisclosure();
  const {
    isOpen: is경험분석로딩모달Open,
    onOpen: 경험분석로딩모달Open,
    onClose: 경험분석로딩모달Close,
  } = useDisclosure();

  const { setValue: setNoticeOpen } = useBoolean();

  useEffect(() => {
    return () => {
      setNoticeOpen(true);
    };
  }, [setNoticeOpen]);

  useBeforUnload();

  const currentStepIndex = (STEPS.find((v) => v.route === pathname)?.id ?? 1) - 1;
  const prevStepIndex = (STEPS.find((v) => v.route === prevPathname)?.id ?? 1) - 1;

  const writeStatus = useWatch({
    name: 'writeStatus',
    control: control,
  });

  const { mutateAsync: createExperience } = useCreateExperience();
  const { mutate: saveKeyword } = useUpdateKeyword({ experienceId });

  useEffect(() => {
    if (Number.isNaN(experienceId)) {
      (async () => {
        const { experienceId } = await createExperience();
        setExperienceId(experienceId);
      })();
    }
    setValue('experienceId', experienceId);
  }, [createExperience, experienceId, setExperienceId, setValue]);

  const { data } = useGetExperience(
    { experienceId },
    {
      enabled: isNumber(experienceId),
      onSuccess: (data) => {
        const [situation, task, action, result, aiResume] = getValues([
          'situation',
          'task',
          'action',
          'result',
          'aiResume',
        ]);
        const [endYYYY, endMM] = data?.endDate?.split?.('-') ?? '';
        const [startYYYY, startMM] = data?.startDate?.split?.('-') ?? '';

        setValue('title', data.title);
        setValue('startYYYY', startYYYY);
        setValue('startMM', startMM);
        setValue('endYYYY', endYYYY);
        setValue('endMM', endMM);
        setValue('experienceRole', data.ExperienceInfo?.experienceRole);
        setValue('motivation', data.ExperienceInfo?.motivation);

        setValue('situation', situation);
        setValue('task', task);
        setValue('action', action);
        setValue('result', result);

        setValue('aiResume', aiResume);
      },
    }
  );

  // 경험분해 페이지 이탈 시 experienceId 초기화
  useEffect(() => {
    return () => {
      resetExperienceId();
    };
  }, [resetExperienceId]);

  const { mutate: updateExperience, status: updateExperienceStatus } = useUpdateExperience(experienceId);
  const { mutateAsync: createRecommendKeyword } = useCreateRecommendKeyword();

  const TOOLTIP_CONTENTS = [
    `“${username}님 좋은 시작이에요”`,
    '“뭐든지 시작이 반이에요”',
    '“내용을 풍부하게 작성할수록 다양한 AI 직무 역량 키워드를 받을 수 있어요 최선을 다해 작성해주세요 :)”',
    '“AI 직무역량 키워드 추천을 통해 나의 직무역량을 다각도로 넓혀보세요”',
  ];
  const stepByStepSave = () => {
    switch (pathname) {
      case ROUTES.EXPERIENCE:
      case ROUTES.INFORMATION:
        saveExperience();
        break;
      case ROUTES.KEYWORD:
        const keywordList = getValues('keywords');
        saveKeyword({
          keywords: Object.fromEntries(keywordList.filter(([, isSelected]) => isSelected === true)),
        });
        break;
      default:
        break;
    }
  };

  const saveExperience = () => {
    const [title, startYYYY, startMM, endYYYY, endMM, experienceRole, motivation, situation, task, action, result] =
      getValues([
        'title',
        'startYYYY',
        'startMM',
        'endYYYY',
        'endMM',
        'experienceRole',
        'motivation',
        'situation',
        'task',
        'action',
        'result',
      ]);
    updateExperience({
      title,
      ...(startYYYY && startMM && { startDate: `${startYYYY}-${startMM}` }),
      ...(endYYYY && endMM && { endDate: `${endYYYY}-${endMM}` }),
      experienceRole,
      motivation,
      situation,
      task,
      action,
      result,
    });
  };

  const setWriteStatus = useCallback(
    (target: WriteStatusType[], status: WriteStatusType) => {
      target[prevStepIndex] = status;
      setValue('writeStatus', target);
    },
    [prevStepIndex, setValue]
  );

  useEffect(() => {
    const writeStatus = getValues('writeStatus') as WriteStatusType[];
    const copyWriteStatus = [...writeStatus];

    // 이탈시 validation check
    return () => {
      switch (prevPathname) {
        case ROUTES.EXPERIENCE:
          const experiencePageValues = getValues([
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
          const keywords = getValues('keywords');
          if (keywords.some(([, isSelected]) => isSelected === true)) {
            setWriteStatus(copyWriteStatus, '작성완료');
          } else {
            setWriteStatus(copyWriteStatus, '미작성');
          }
          break;
        case ROUTES.INFORMATION:
          const informationPageValues = getValues(['situation', 'task', 'action', 'result']);
          if (informationPageValues.every((v) => !!v)) {
            setWriteStatus(copyWriteStatus, '작성완료');
          } else if (informationPageValues.some((v) => !!v)) {
            setWriteStatus(copyWriteStatus, '작성중');
          } else {
            setWriteStatus(copyWriteStatus, '미작성');
          }
          break;
        case ROUTES.VERIFY:
          const [capabilities, aiResume] = getValues(['capabilities', 'aiResume']);
          if (!!capabilities.length && !!aiResume) {
            setWriteStatus(copyWriteStatus, '작성완료');
          } else if (!!capabilities.length || !!aiResume) {
            setWriteStatus(copyWriteStatus, '작성중');
          } else {
            setWriteStatus(copyWriteStatus, '미작성');
          }
          break;
        default:
          break;
      }
    };
  }, [getValues, pathname, prevPathname, setWriteStatus]);

  const readyToAIRecommendation = async () => {
    const [writeStatus, situation, task, action, result] = getValues([
      'writeStatus',
      'situation',
      'task',
      'action',
      'result',
    ]);
    const isReadyToAIRecommendation = writeStatus?.slice(0, 3).every((status) => status === '작성완료');
    updateExperience({
      situation,
      task,
      action,
      result,
    });

    if (!isReadyToAIRecommendation) {
      AI진입조건모달Open();
      return;
    } else if (isReadyToAIRecommendation && !usedOnce) {
      경험분석로딩모달Open();
      const { capabilities } = await createRecommendKeyword({
        experienceId,
        situation,
        task,
        action,
        result,
      });
      setValue('capabilities', capabilities);
      disableOnceFlag();
      경험분석로딩모달Close();
      push('/analyze/verify');
    } else push('/analyze/verify');
  };

  return (
    <>
      <div className="absolute w-[100%] h-[518px] top-0 left-0 right-0 bottom-0 bg-[linear-gradient(180deg,rgba(201,196,252,0.35)_0%,rgba(201,196,252,0.00)_100%)] -z-10" />
      <div className="pt-[120px] mx-auto max-w-[1200px] h-[100%]">
        <div className="experience px-[90.5px] py-[40px] mb-[32px]">
          <Stepper />
        </div>
        <div className="flex flex-row">
          <div className="min-w-[770px] mr-[46px] mb-[32px]">
            {children}
            <PrevNextButton stepByStepSave={stepByStepSave} readyToAIRecommendation={readyToAIRecommendation} />
          </div>

          {/* Aside */}
          <div className="experience sticky flex flex-col items-center min-w-[384px] mb-[182px] px-[14px] py-[32px] h-[100%] top-[88px]">
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
            <StepMenu
              status={writeStatus as WriteStatusType[]}
              stepByStepSave={stepByStepSave}
              readyToAIRecommendation={readyToAIRecommendation}
            />
            <div className="absolute top-[calc(100%+16px)] left-[0px] right-[0px]">
              <Button
                type="button"
                className="w-full mb-[6px]"
                variant="gray200"
                size="XL"
                onClick={stepByStepSave}
                disabled={['loading', 'error'].includes(updateExperienceStatus)}>
                저장하기
              </Button>
              <SavingCaption
                updatedAt={formatYYMMDDhhmm(data?.updatedAt)}
                currentSavingStatus={updateExperienceStatus}
                direction="ltr"
              />
            </div>
          </div>
        </div>
      </div>
      <AI진입조건모달
        size="3xl"
        isOpen={isAI진입조건모달Open}
        onClose={AI진입조건모달Close}
        title={`앞의 단계를 작성해야 AI 직무역량 추천과\n경험카드를 받을 수 있어요`}
        textContent="확인했어요"
      />
      <경험분석로딩모달 size="3xl" isOpen={is경험분석로딩모달Open} onClose={경험분석로딩모달Close} />
    </>
  );
};

export default Layout;
