import React from 'react';

import { usePathname } from 'next/navigation';

import { STEP, STEPS } from '@/features/analyze/constants';

const Stepper = () => {
  const pathname = usePathname();
  const currentStepId = STEPS.find((step) => step.route === pathname)?.id ?? STEP.experience;

  return (
    <div className="flex-center">
      {STEPS.map(({ id, title }) => (
        <div key={id} className="flex-center">
          <div
            className={`flex-center rounded-[50%] mr-[6px] w-[24px] h-[24px] ${
              id <= currentStepId ? 'bg-gray-800' : 'bg-gray-400'
            } `}>
            <span className={`subhead4 text-white`}>{id}</span>
          </div>
          <span className={`subhead2 ${id <= currentStepId ? 'text-main' : 'text-light'}`}>{title}</span>
          {id === STEPS.length ? null : (
            <div className={`w-[70px] h-[2px] mx-[12px] ${id < currentStepId ? 'bg-gray-600' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
