import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="layout-mt-40">{children}</div>;
};

export default Layout;
