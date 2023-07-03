import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { tw } from '@/shared/utils/tailwindMerge';

import styles from './Looper.module.scss';

type InfiniteLooperProps = {
  /**
   * 진행 속도
   */
  speed: number;
  /**
   * 진행 방향
   */
  direction: 'right' | 'left';
  /**
   * 슬라이더 요소
   */
  children: ReactNode;
};

/**
 * 무한 반복 슬라이더 컴포넌트
 *
 * @reference [Infinite looping React component](https://blog.finiam.com/blog/infinite-looping-react-component)
 */
const Looper = ({ speed, direction, children }: InfiniteLooperProps) => {
  const className = tw(styles.outer);

  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const [looperInstances, setLooperInstances] = useState(1);

  /**
   * 슬라이더의 애니메이션을 리셋
   */
  const resetAnimation = () => {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  };

  /**
   * 슬라이더와 내부의 너비를 기반으로 슬라이더 인스턴스 설정
   */
  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;

    const { width: innerWidth } = innerRef.current.getBoundingClientRect();
    const { width: outerWidth } = outerRef.current.getBoundingClientRect();

    /**
     * 슬라이더의 길이 - 내부의 길이
     */
    const widthDeficit = outerWidth - innerWidth;

    /**
     * 각각의 자식 요소의 너비
     *
     * 내부 길이 / 자식 요소의 개수
     */
    const instanceWidth = innerWidth / innerRef.current.children.length;

    /**
     * 슬라이더의 길이가 내부의 길이보다 크다면, 애니메이션 진행을 위해 내부 요소가 더 필요함
     */
    if (widthDeficit) {
      setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1);
    }

    resetAnimation();
  }, [looperInstances]);

  useEffect(() => {
    setupInstances();
  }, [setupInstances]);

  /**
   * 화면 크기 조절에 따라 슬라이더 인스턴스를 다시 세팅
   */
  useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className={className} ref={outerRef}>
      <div className={styles.inner} ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, index) => (
          <div
            key={index}
            className={styles['inner-item']}
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Looper;
