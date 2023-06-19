import React from 'react';

import { usePathname } from 'next/navigation';

import { ROUTES } from '@/shared/constants/routes';

const steps = [
  {
    id: 1,
    title: '경험정보',
    route: ROUTES.EXPERIENCE,
  },
  {
    id: 2,
    title: '직무역량 키워드',
    route: ROUTES.KEYWORD,
  },
  {
    id: 3,
    title: '경험내용',
    route: ROUTES.INFORMATION,
  },
  {
    id: 4,
    title: 'AI 직무역량 추천',
    route: ROUTES.VERIFY,
  },
];

const Stepper = () => {
  const pathname = usePathname();
  const currentStepId = steps.find((step) => step.route === pathname)?.id ?? 1;

  return (
    <div className="flex-center">
      {steps.map(({ id, title }) => (
        <div key={id} className="flex-center">
          <div
            className={`flex-center rounded-[50%] mr-[6px] w-[24px] h-[24px] ${
              id <= currentStepId ? 'bg-gray-800' : 'bg-gray-400'
            } `}>
            <span className={`subhead4 text-white`}>{id}</span>
          </div>
          <span className={`subhead2 ${id <= currentStepId ? 'text-main' : 'text-light'}`}>{title}</span>
          {id === steps.length ? null : (
            <div className={`w-[70px] h-[2px] mx-[12px] ${id < currentStepId ? 'bg-gray-600' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
