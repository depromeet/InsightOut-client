import { useEffect, useRef, useState } from 'react';
import TooltipContent from '@/components/Tooltip/TooltipContent';
import getPlacement from '@/services/utils/tooltip/getPlacement';
import { OFFSET } from '@/services/constants/tooltip';
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
  }
>;

/**
 * @name 툴팁컴포넌트
 */
const Tooltip = ({ type, position, content, children }: TooltipProps) => {
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
        <TooltipContent type={type} position={position} content={content} isOpen={isOpen} style={tooltipPlacement} />
      )}
    </div>
  );
};

export default Tooltip;