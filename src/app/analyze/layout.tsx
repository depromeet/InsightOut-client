'use client';

import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';

import { useDisclosure, usePrevious } from '@chakra-ui/react';
import { DevTool } from '@hookform/devtools';
import isNumber from 'lodash/isNumber';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';
import Lottie from '@/components/Lottie/Lottie';
import Progress from '@/components/Progress/Progress';
import Stepper from '@/components/Stepper/Stepper';
import TooltipRelativeContent from '@/components/Tooltip/TooltipRelativeContent';
import { initialValue, STEPS } from '@/features/analyze/constants';
import StepMenu from '@/features/analyze/layout/StepMenu';
import AI진입조건모달 from '@/features/analyze/modal/BaseDialog';
import 이탈방지모달 from '@/features/analyze/modal/BaseDialog';
import 경험분석로딩모달 from '@/features/analyze/modal/LoadingModal';
import PrevNextButton from '@/features/analyze/PrevNextButton/PrevNextButton';
import { ExperienceFormValues, WriteStatusType } from '@/features/analyze/types';
import SavingCaption from '@/features/resume/components/ResumeForm/SavingCaption';
import { useCreateRecommendKeyword, useSubmitExperience } from '@/hooks/reactQuery/ai/mutation';
import { useCreateExperience, useUpdateExperience } from '@/hooks/reactQuery/analyze/mutation';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';
import { useUpdateKeyword } from '@/hooks/reactQuery/keyword/mutation';
import useBeforUnload from '@/hooks/useBeforeUnload';
import { useIsMounted } from '@/hooks/useIsMounted';
import { useOnceFlag } from '@/hooks/useOnceFlag';
import { ROUTES } from '@/shared/constants/routes';
import { experienceIdStore } from '@/shared/store/experienceId';
import { useUserNickname } from '@/shared/store/user';
import formatYYMMDDhhmm from '@/shared/utils/date/formatYYMMDDhhmm';

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const prevPathname = usePrevious(pathname);
  const isMounted = useIsMounted();
  const [usedOnce, disableOnceFlag] = useOnceFlag();
  const username = useUserNickname();
  const { experienceId, setExperienceId, resetExperienceId } = experienceIdStore();

  useBeforUnload();

  const { isOpen: isAI진입조건모달Open, onOpen: AI진입조건모달Open, onClose: AI진입조건모달Close } = useDisclosure();
  const { isOpen: is이탈방지모달Open, onOpen: 이탈방지모달Open, onClose: 이탈방지모달Close } = useDisclosure();

  const {
    isOpen: is경험분석로딩모달Open,
    onOpen: 경험분석로딩모달Open,
    onClose: 경험분석로딩모달Close,
  } = useDisclosure();

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

  const { mutateAsync: createExperience } = useCreateExperience();
  const { mutate: saveKeyword } = useUpdateKeyword({ experienceId });

  useEffect(() => {
    if (Number.isNaN(experienceId)) {
      (async () => {
        const { experienceId } = await createExperience();
        setExperienceId(experienceId);
      })();
    }
    methods.setValue('experienceId', experienceId);
  }, [createExperience, experienceId, methods, setExperienceId]);

  const { data } = useGetExperience(
    { experienceId },
    {
      enabled: isNumber(experienceId),
      onSuccess: (data) => {
        const { setValue, getValues } = methods;
        const [situation, task, action, result, resume] = getValues([
          'situation',
          'task',
          'action',
          'result',
          'resume',
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

        setValue('resume', resume);
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
  const { mutateAsync: submitExperience } = useSubmitExperience();
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
        const keywordList = methods.getValues('keywords');
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
      methods.getValues([
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
      methods.setValue('writeStatus', target);
    },
    [methods, prevStepIndex]
  );

  useEffect(() => {
    const writeStatus = methods.getValues('writeStatus') as WriteStatusType[];
    const copyWriteStatus = [...writeStatus];

    // 이탈시 validation check
    return () => {
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
        case ROUTES.VERIFY:
          const [capabilities, resume] = methods.getValues(['capabilities', 'resume']);
          if (!!capabilities.length && !!resume) {
            setWriteStatus(copyWriteStatus, '작성완료');
          } else if (!!capabilities.length || !!resume) {
            setWriteStatus(copyWriteStatus, '작성중');
          } else {
            setWriteStatus(copyWriteStatus, '미작성');
          }
          break;
        default:
          break;
      }
    };
  }, [methods, pathname, prevPathname, setWriteStatus]);

  const submit = async (data: ExperienceFormValues) => {
    const { experienceId, situation, task, action, result, writeStatus } = data;
    const isReadyToSubmit = writeStatus?.slice(0, 3).every((status) => status === '작성완료');
    if (!isReadyToSubmit) {
      return;
    }

    const response = await submitExperience({
      experienceId,
      situation,
      task,
      action,
      result,
    });

    // FIXME: 성공하면 보내는 곳은 준하님이 이어서 작업해주시면 됩니다.
    // TODO: 경험카드 페이지로 보내고 제출하는 로직으로 변경하기 or 제출하고 여기서 로딩 모달을 띄우고 완료하면 경험카드 페이지로 보내기
    if ('ExperienceInfo' in response) push('/');
  };

  const readyToAIRecommendation = async () => {
    const { getValues, setValue } = methods;
    const [writeStatus, situation, task, action, result] = getValues([
      'writeStatus',
      'situation',
      'task',
      'action',
      'result',
    ]);
    const isReadyToAIRecommendation = writeStatus?.slice(0, 3).every((status) => status === '작성완료');
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
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
        {isMounted && <DevTool control={methods.control} />}
      </form>
      <AI진입조건모달
        size="3xl"
        isOpen={isAI진입조건모달Open}
        onClose={AI진입조건모달Close}
        title={`앞의 단계를 작성해야 AI 직무역량 추천과\n경험카드를 받을 수 있어요`}
        textContent="확인했어요"
      />
      <경험분석로딩모달 size="3xl" isOpen={is경험분석로딩모달Open} onClose={경험분석로딩모달Close} />
      <이탈방지모달
        size="3xl"
        isOpen={is이탈방지모달Open}
        onClose={이탈방지모달Close}
        title={`그만 작성하실 건가요? 지금까지 작성한 내용은\n모아보기 탭에서 확인할 수 있어요`}
        leftTextContent="계속 작성하기"
        rightTextContent="임시저장하고 나가기"
        handleLeftClick={() => console.log('계속 작성하기')}
        handleRightClick={() => console.log('임시저장하고 나가기')}
        closeOnOverlayClick={false}
        closeOnEsc={false}
      />
    </FormProvider>
  );
};

export default Layout;
