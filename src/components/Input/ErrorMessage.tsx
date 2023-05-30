import { PropsWithChildren } from 'react';

import IconError from '../Icon/IconError';

export const ErrorMessage = ({ children }: PropsWithChildren) => (
  <p className="flex gap-[6px] mt-2 ml-3 text-xs text-error">
    <IconError />
    {children}
  </p>
);
