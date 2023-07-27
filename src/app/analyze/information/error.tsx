import React, { HTMLAttributes } from 'react';

interface PageErrorBoundary extends HTMLAttributes<HTMLDivElement> {
  error?: Error;
  reset?: () => void;
}

const PageErrorBoundary = ({ error, reset }: PageErrorBoundary) => {
  console.log({ error });
  return <PageErrorBoundary onClick={reset} />;
};

export default PageErrorBoundary;
