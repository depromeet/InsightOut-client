import React, { useMemo } from 'react';
import IconTooltipArrowTop from '@/components/Icon/IconTooltipArrowTop';
import IconTooltipArrowBottom from '@/components/Icon/IconTooltipArrowBottom';
import IconTooltipArrowLeft from '@/components/Icon/IconTooltipArrowLeft';
import IconTooltipArrowRight from '@/components/Icon/IconTooltipArrowRight';
import styles from './TooltipArrow.module.scss';
import { tw } from '@/shared/utils/tailwindMerge';

type TooltipArrowProps = {
  /** @description 클래스네임 */
  className: string;
  /** @description 툴팁 타입 (strong, light, primary) */
  type: TooltipType;
  /** @description 툴팁 포지션 (center-top, center-bottom, right-top, right-bottom, left-top, left-bottom, side-left-center, side-right-center) */
  position: TooltipPosition;
};

/**
 * @name 툴팁화살표컴포넌트
 */
const TooltipArrow = ({ className, type, position }: TooltipArrowProps) => {
  const rootClassName = tw(styles.root, styles[type], styles[position], className);

  const TooltipArrowElement = useMemo(() => {
    switch (position) {
      case 'center-top':
      case 'left-top':
      case 'right-top':
        return <IconTooltipArrowBottom className={rootClassName} />;
      case 'center-bottom':
      case 'left-bottom':
      case 'right-bottom':
        return <IconTooltipArrowTop className={rootClassName} />;
      case 'side-left-center':
        return <IconTooltipArrowRight className={rootClassName} />;
      case 'side-right-center':
        return <IconTooltipArrowLeft className={rootClassName} />;
      default:
        return <IconTooltipArrowTop className={rootClassName} />;
    }
  }, [position, rootClassName]);

  return TooltipArrowElement;
};

export default TooltipArrow;
