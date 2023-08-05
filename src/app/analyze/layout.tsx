'use client';

import React from 'react';

import Layout from '@/features/analyze/layout';
import ExperienceFormProvider from '@/features/ExperienceFormProvider';

export interface LayoutProps {
  children: React.ReactNode;
}
const LayoutPage = ({ children }: LayoutProps) => {
  return (
    <ExperienceFormProvider>
      <Layout>{children}</Layout>
    </ExperienceFormProvider>
  );
};

export default LayoutPage;
