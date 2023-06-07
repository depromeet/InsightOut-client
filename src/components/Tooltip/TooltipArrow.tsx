import React, { useMemo } from 'react';
import cn from 'classnames';
import IconTooltipTailTop from '@/components/Icon/IconTooltipTailTop';
import IconTooltipTailBottom from '@/components/Icon/IconTooltipTailBottom';
import IconTooltipTailLeft from '@/components/Icon/IconTooltipTailLeft';
import IconTooltipTailRight from '@/components/Icon/IconTooltipTailRight';
import styles from './TooltipArrow.module.scss';

type TooltipArrowProps = {
  /** @description 클래스네임 */
  className: string;
  /** @description 툴팁 포지션 (center-top, center-bottom, right-top, right-bottom, left-top, left-bottom, side-left-center, side-right-center) */
  position: TooltipPosition;
};

/**
 * @name 툴팁화살표컴포넌트
 */
const TooltipArrow = ({ className, position }: TooltipArrowProps) => {
  const rootClassName = cn(styles.root, styles[position], className);

  const TooltipArrowElement = useMemo(() => {
    switch (position) {
      case 'center-top':
      case 'left-top':
      case 'right-top':
        return <IconTooltipTailBottom className={rootClassName} />;
      case 'center-bottom':
      case 'left-bottom':
      case 'right-bottom':
        return <IconTooltipTailTop className={rootClassName} />;
      case 'side-left-center':
        return <IconTooltipTailRight className={rootClassName} />;
      case 'side-right-center':
        return <IconTooltipTailLeft className={rootClassName} />;
      default:
        return <IconTooltipTailTop className={rootClassName} />;
    }
  }, [position, rootClassName]);

  return TooltipArrowElement;
};

export default TooltipArrow;
