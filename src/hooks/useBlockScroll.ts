import { useEffect } from 'react';

export const useBlockScroll = (condition: boolean): void => {
  useEffect(() => {
    if (condition) document.body.style.overflow = 'hidden';
    return () => {
      if (condition) document.body.style.overflow = 'unset';
    };
  }, [condition]);
};
