import { ChangeEvent, useCallback, useState } from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
type onChangeType = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;

const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(({ target }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const max = Number(target.getAttribute('maxLength'));

    if (max && target.value.length > max) {
      target.value = target.value.slice(0, max);
    }

    setValue(target.value);
  }, []);
  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};

export default useInput;
