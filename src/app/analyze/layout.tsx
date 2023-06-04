import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="pt-[105px] mx-auto max-w-[1200px] h-[100%]">{children}</div>;
};

export default Layout;
