import { useRef } from 'react';

const useDebounce = (callback: () => void, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  return () => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(callback, delay);
  };
};

export default useDebounce;
