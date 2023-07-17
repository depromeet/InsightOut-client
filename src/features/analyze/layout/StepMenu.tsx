import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/shared/constants/routes';

import { STEPS } from '../constants';
import { WriteStatusType } from '../types';
import StepMenuItem from './StepMenuItem';

interface StepMenuProps {
  status: WriteStatusType[];
  stepByStepSave: () => void;
  readyToAIRecommendation: () => void;
}

const StepMenu = ({ status, stepByStepSave, readyToAIRecommendation }: StepMenuProps) => {
  const pathname = usePathname();
  return (
    <>
      <div className="bg-gray-50 w-[100%] h-[2px] rounded-[8px] my-[24px]" />
      <span className="subhead2 w-[100%] mb-[24px]">작성 페이지</span>
      <ul className="flex flex-col w-[100%] [&>a:not(:last-child)]:mb-[8px]">
        {STEPS.map(({ id, title, route }, index) => {
          if (route === ROUTES.VERIFY) {
            return (
              <div key={id} {...(pathname !== route && { onClick: readyToAIRecommendation })}>
                <StepMenuItem title={title} status={status[index]} />
              </div>
            );
          }
          return (
            <Link key={id} href={route} {...(pathname !== route && { onClick: stepByStepSave })}>
              <StepMenuItem title={title} status={status[index]} />
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default StepMenu;
