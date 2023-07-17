import { RefCallback } from 'react';

export const callbackRefWithResizeHeight =
  (callbackRef: RefCallback<HTMLTextAreaElement>) => (element: HTMLTextAreaElement) => {
    callbackRef(element);
    element.style.height = 'auto';
    // 2px은 border때문에 스크롤이 생겨서 추가함
    element.style.height = `${element.scrollHeight + 2}px`;
  };
