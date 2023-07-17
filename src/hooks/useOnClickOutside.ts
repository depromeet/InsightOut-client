/* eslint-disable unused-imports/no-unused-vars */

import { RefObject, useEffect, useRef } from 'react';

interface Props {
  /**
   * 외부 영역이지만 무시할 엘리먼트의 ref (Optional)
   */
  ignoredRef?: RefObject<HTMLElement>;
  /**
   * 외부 영역 클릭 시 실행할 콜백함수 (Required)
   */
  callback: (event: Event) => void;
}

type Event = MouseEvent | TouchEvent;

/**
 * @hooks
 * @description 외부 영역 클릭 시 콜백 함수를 실행하는 훅
 * @property {HTMLElement} ignoredRef 외부 영역이지만 무시할 엘리먼트의 ref (Optional)
 * @reference [useOnClickOutside](https://hashnode.com/post/useonclickoutside-custom-hook-to-detect-the-mouse-click-on-outside-typescript-ckrejmy3h0k5r91s18iu42t28)
 * @example
 *   const moreButtonRef = useRef<HTMLButtonElement>(null)
 *   ...
 *   const dropUpRef = useOnClickOutside<HTMLDivElement>({
 *     ignoredRef: moreButtonRef,
 *     callback: () => setOpened(false)
 *   })
 */

const useOnClickOutside = <T extends HTMLElement = HTMLElement>({ ignoredRef, callback }: Props) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || !event.target) return;

      const element = ref.current;
      const ignoredRefElement = ignoredRef?.current;

      if (element.contains(event.target as Node) || ignoredRefElement?.contains(event.target as Node)) {
        return;
      }

      callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback, ignoredRef]);

  return ref;
};

export default useOnClickOutside;
