import { useCallback, useEffect, useRef } from 'react';

/**
 * Intersection Observer API를 사용하는 훅입니다.
 * - target으로 설정한 요소와 뷰포트와 교차하는지 구별합니다.
 * - 무한스크롤에 사용할 수 있습니다.
 *
 * @param onIntersect
 * @param options root, rootMargin, threshold
 *
 * @returns target 요소에 전달할 ref
 */
const useIntersection = (
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<HTMLDivElement>(null);

  /**
   * target 요소가 교차되었을 때 실행할 함수
   *
   * @param entries IntersectionObserverEntry 객체의 리스트
   * @param observer 콜백함수가 호출되는 IntersectionObserver
   */
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useIntersection;
