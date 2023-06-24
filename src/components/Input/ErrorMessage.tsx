import { PropsWithChildren } from 'react';

import IconError from '../Icon/IconError';

type ErrorMessageProps = PropsWithChildren & { hasIcon?: boolean };

export const ErrorMessage = ({ hasIcon, children }: ErrorMessageProps) => (
  <p className="flex gap-[6px] mt-2 ml-3 text-xs text-error absolute">
    {hasIcon && <IconError />}
    {children}
  </p>
);
