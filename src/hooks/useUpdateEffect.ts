import { DependencyList, EffectCallback, useEffect } from 'react';

import { useIsFirstRender } from './useIsFirstRender';

export const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
};
