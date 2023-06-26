import { useEffect, useRef, useState } from 'react';

import TooltipContent from '@/components/Tooltip/TooltipContent';
import { OFFSET } from '@/shared/constants/tooltip';
import getPlacement from '@/shared/utils/tooltip/getPlacement';

import styles from './Tooltip.module.scss';

type TooltipProps = MergeComponentProps<
  'div',
  {
    /** @description 툴팁 타입 (strong, light) */
    type: TooltipType;
    /** @description 툴팁 포지션 (center-top, center-bottom, right-top, right-bottom, left-top, left-bottom, side-left-center, side-right-center) */
    position: TooltipPosition;
    /** @description 툴팁 텍스트 */
    content: string;
    /** @description 출력된 채로 고정 여부 */
    alwaysOpen?: boolean;
  }
>;

/**
 * @name 툴팁컴포넌트
 */
const Tooltip = ({ type, position, content, children, alwaysOpen }: TooltipProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [childrenRect, setChildrenRect] = useState<DOMRect>();

  const tooltipPlacement = getPlacement(position, OFFSET, childrenRect);

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
