'use client';

import { useSearchParams } from 'next/navigation';

import Confetti from '@/features/experience/Confetti';
import Wrapper from '@/features/experience/Wrapper';

export interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const experienceId = useSearchParams().get('experienceId');

  return (
    <Wrapper>
      {children}
      <Confetti />
    </Wrapper>
  );
};

export default layout;
