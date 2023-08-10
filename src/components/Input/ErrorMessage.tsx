import { HTMLAttributes, PropsWithChildren } from 'react';

import cn from 'classnames';

import IconError from '../Icon/IconError';

type ErrorMessageProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>> & { hasIcon?: boolean };

export const ErrorMessage = ({ hasIcon, className, children }: ErrorMessageProps) => (
  <p className={cn('flex gap-[6px] mt-2 ml-3 text-xs text-error absolute', className)}>
    {hasIcon && <IconError />}
    {children}
  </p>
);
