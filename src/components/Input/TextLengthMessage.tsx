import { ComponentPropsWithRef } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

type TextLengthMessageProps = ComponentPropsWithRef<'p'> & {
  currentLength: number;
  maxLength: number;
};

export const TextLengthMessage = ({ currentLength, maxLength, className, ...props }: TextLengthMessageProps) => (
  <p className={tw('mt-2 text-gray-500 c1', className)} {...props}>
    <span className={currentLength > 0 ? 'text-green-400' : ''}>
      {formatCurrentTextLength(currentLength, maxLength)}
    </span>
    <span>/{maxLength}</span>
  </p>
);

const formatCurrentTextLength = (currentTextLength: number, maxTextLength: number) =>
  String(currentTextLength || 0).padStart(String(maxTextLength || 0).length, '0');
