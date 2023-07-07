import { useEffect, useRef, useState } from 'react';

import TooltipContent from '@/components/Tooltip/TooltipContent';
import { OFFSET } from '@/shared/constants/tooltip';
import getPlacement from '@/shared/utils/tooltip/getPlacement';

import styles from './Tooltip.module.scss';

type TooltipProps = MergeComponentProps<
  'div',
  {
    /** @description 툴팁 타입 (strong, light, primary) */
    type: TooltipType;
    /** @description 툴팁 포지션 (center-top, center-bottom, right-top, right-bottom, left-top, left-bottom, side-left-center, side-right-center) */
    position: TooltipPosition;
    /** @description 툴팁 텍스트 */
    content: string;
    /** @description 출력된 채로 고정 여부 */
    alwaysOpen?: boolean;
    /**
     * @description 툴팁 추가 간격
     * - 기본 간격 17px (툴팁의 기본 간격 8px + 툴팁 Arrow 크기 9px = 17px) */
    offset?: number;
  }
>;

/**
 * @name 툴팁컴포넌트
 */
const Tooltip = ({ type, position, content, children, alwaysOpen, offset }: TooltipProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [childrenRect, setChildrenRect] = useState<DOMRect>();

  const tooltipPlacement = getPlacement(position, OFFSET + (offset ?? 0), childrenRect);

  useEffect(() => {
    const childrenElement = childrenRef.current;
    if (!childrenElement) return;
    setChildrenRect(childrenElement.getBoundingClientRect());
  }, []);

  return (
    <div className={styles.root} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div ref={childrenRef} className={styles.children}>
        {children}
      </div>
      {tooltipPlacement && (
        <TooltipContent
          type={type}
          position={position}
          content={content}
          isOpen={alwaysOpen ? true : isOpen}
          style={tooltipPlacement}
        />
      )}
    </div>
  );
};

export default Tooltip;
