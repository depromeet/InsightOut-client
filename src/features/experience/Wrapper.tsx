'use client';

import React, { PropsWithChildren } from 'react';

import Image from 'next/image';

import eclipsePrimay from '../../../public/images/ellipsePrimay.png';
import ellipseSecondary from '../../../public/images/ellipseSecondary.png';

// Backlog 배경 서서히 바뀌기
// import useBackgroundColorTransition from '@/hooks/useBackgroundColorTransition';

const Wrapper = ({ children }: PropsWithChildren) => {
  // const { color } = useBackgroundColorTransition([255, 255, 255], [37, 39, 48], 4000);

  return (
    <div className="relative h-full overflow-auto bg-dark">
      <div className="absolute top-[0] right-0">
        <Image src={ellipseSecondary} alt="" width={456} height={437} />
      </div>
      <div className="absolute top-[593px]">
        <Image src={eclipsePrimay} alt="" width={962} height={682} />
      </div>
      {children}
    </div>
  );
};

export default Wrapper;
