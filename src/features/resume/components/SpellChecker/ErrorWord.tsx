import { PropsWithChildren } from 'react';

const ErrorWord = ({ children }: PropsWithChildren) => {
  return <mark className="bg-transparent text-error">{children}</mark>;
};

export default ErrorWord;
