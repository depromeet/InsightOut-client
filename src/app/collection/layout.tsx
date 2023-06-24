import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="layout pt-[96px]">{children}</div>;
};

export default Layout;
