import React, { forwardRef, useMemo } from 'react';
import cn from 'classnames';
import IconTooltipTailTop from '@/components/Icon/IconTooltipTailTop';
import IconTooltipTailBottom from '@/components/Icon/IconTooltipTailBottom';
import IconTooltipTailLeft from '@/components/Icon/IconTooltipTailLeft';
import IconTooltipTailRight from '@/components/Icon/IconTooltipTailRight';
import wrapTooltipChildren from '@/services/utils/wrapTooltipChildren';
import styles from './Tooltip.module.scss';

type TooltipProps = MergeComponentProps<
  'div',
  {
    /** @description 툴팁 타입 (strong, light) */
    type: TooltipType;
    /** @description 툴팁 포지션 (center-top, center-bottom, right-top, right-bottom, left-top, left-bottom, side-left-center, side-right-center) */
    position: TooltipPosition;
    /** @description 툴팁 텍스트 */
    children: string;
  }
>;

/**
 * @name 툴팁컴포넌트
 */
const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ type = 'strong', position = 'center-top', children, className, ...props }, ref) => {
    const rootClassName = cn(styles.root, styles[type], styles[position], className);
    const wrappedChildren = wrapTooltipChildren(children);

    const tooltipTail = useMemo(() => {
      switch (position) {
        case 'center-top':
        case 'left-top':
        case 'right-top':
          return <IconTooltipTailBottom className={styles.tail} />;
        case 'center-bottom':
        case 'left-bottom':
        case 'right-bottom':
          return <IconTooltipTailTop className={styles.tail} />;
        case 'side-left-center':
          return <IconTooltipTailRight className={styles.tail} />;
        case 'side-right-center':
          return <IconTooltipTailLeft className={styles.tail} />;
        default:
          return <IconTooltipTailTop className={styles.tail} />;
      }
    }, [position]);

    return (
      <div ref={ref} className={rootClassName} {...props}>
        {wrappedChildren}
        {tooltipTail}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
