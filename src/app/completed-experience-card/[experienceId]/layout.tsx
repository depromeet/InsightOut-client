import Confetti from '@/features/experience/Confetti';
import Wrapper from '@/features/experience/Wrapper';

export interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      {children}
      <Confetti />
    </Wrapper>
  );
};

export default layout;
