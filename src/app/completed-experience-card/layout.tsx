import Wrapper from '@/features/experience/Wrapper';

export interface LayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: LayoutProps) => <Wrapper>{children}</Wrapper>;

export default layout;
