'use client';

import React, { HTMLAttributes } from 'react';

import PageErrorBoundary from '@/features/analyze/PageErrorBoundary/PageErrorBoundary';

interface ErrorProps extends HTMLAttributes<HTMLDivElement> {
  error?: Error;
  reset?: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  console.log({ error });
  return <PageErrorBoundary onClick={reset} />;
};

export default Error;
