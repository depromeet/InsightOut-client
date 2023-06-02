import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Template = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default Template;
