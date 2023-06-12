import { ComponentPropsWithRef } from 'react';

import { tw } from '@/shared/utils/tailwindMerge';

type TextLengthMessageProps = ComponentPropsWithRef<'p'> & {
  currentLength: number;
  maxLength: number;
};

export const TextLengthMessage = ({ currentLength, maxLength, className, ...props }: TextLengthMessageProps) => (
  <p className={tw('text-gray-500 c1', className)} {...props}>
    <span className={currentLength > 0 ? 'text-secondary-400' : ''}>
      {formatCurrentTextLength(currentLength, maxLength)}자
    </span>
    <span>/{maxLength}자(공백포함)</span>
  </p>
);

const formatCurrentTextLength = (currentTextLength: number, maxTextLength: number) =>
  String(currentTextLength || 0).padStart(String(maxTextLength || 0).length, '0');
