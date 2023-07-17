import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Route } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';
import { ROUTES } from '@/shared/constants/routes';

import { ExperienceFormValues } from '../types';

interface Props {
  stepByStepSave: () => void;
  readyToAIRecommendation: () => void;
}

const PrevNextButton = ({ stepByStepSave, readyToAIRecommendation }: Props) => {
  const { back } = useRouter();
  const pathname = usePathname();
  const {
    control,
    formState: { errors },
  } = useFormContext<ExperienceFormValues>();
  const [resume, capabilities] = useWatch({
    control,
    name: ['resume', 'capabilities'],
  });

  const handlePrevButton = () => {
    stepByStepSave();
    back();
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
    <div className="flex-center mt-[32px] gap-[12px]">
      {pathname === ROUTES.EXPERIENCE ? null : (
        <Button type="button" variant="gray200" size="XL" onClick={handlePrevButton}>
          이전으로
        </Button>
      )}
      {pathname === ROUTES.INFORMATION ? (
        <Button type="button" variant="gray900" size="XL" onClick={readyToAIRecommendation}>
          다음으로
        </Button>
      ) : pathname === ROUTES.VERIFY ? (
        <Button
          type="submit"
          variant="gray900"
          size="XL"
          disabled={!capabilities.length || !resume || !!Object.entries(errors).length}>
          경험카드 만들기
        </Button>
      ) : (
        <Link href={handleNextButton() as Route}>
          <Button type="button" variant="gray900" size="XL" onClick={stepByStepSave}>
            다음으로
          </Button>
        </Link>
      )}
    </div>
  );
};

export default PrevNextButton;
