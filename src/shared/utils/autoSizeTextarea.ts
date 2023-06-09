import { RefObject } from 'react';

export const resizeHeight = <T extends HTMLTextAreaElement>(ref: RefObject<T>) => {
  if (!ref.current) return;

  ref.current.style.height = 'auto';
  ref.current.style.height = `${ref.current.scrollHeight}px`;
};
