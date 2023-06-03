import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="mt-[105px] mx-auto max-w-[1200px]">{children}</div>;
};

export default Layout;
