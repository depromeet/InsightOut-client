import { useCallback, useState } from 'react';

/**
 * @description 단 한 번의 상태 업데이트만을 위해 사용되는 값을 제공하는 hook입니다.
 */
export const useOnceFlag = (): [boolean, () => void] => {
  const [usedOnce, setUsedOnce] = useState(false);

  const disableFlag = useCallback(() => {
    setUsedOnce(true);
  }, []);

  return [usedOnce, disableFlag];
};
