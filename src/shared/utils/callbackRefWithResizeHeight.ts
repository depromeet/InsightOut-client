import { RefCallback } from 'react';

export const callbackRefWithResizeHeight =
  (callbackRef: RefCallback<HTMLTextAreaElement>) => (element: HTMLTextAreaElement) => {
    callbackRef(element);
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };
