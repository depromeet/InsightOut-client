import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="layout-mt-40 mt-[56px]">{children}</div>;
};

export default Layout;
