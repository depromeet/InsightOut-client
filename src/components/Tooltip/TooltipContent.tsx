import React, { forwardRef } from 'react';

import { Portal } from '@chakra-ui/react';

import TooltipArrow from '@/components/Tooltip/TooltipArrow';
import { tw } from '@/shared/utils/tailwindMerge';
import wrapTooltipChildren from '@/shared/utils/tooltip/wrapTooltipChildren';

import styles from './TooltipContent.module.scss';

type TooltipProps = MergeComponentProps<
  'div',
  {
    /** @description 툴팁 타입 (strong, light) */
    type: TooltipType;
    /** @description 툴팁 포지션 (center-top, center-bottom, right-top, right-bottom, left-top, left-bottom, side-left-center, side-right-center) */
    position: TooltipPosition;
    /** @description 툴팁 텍스트 */
    content: string;
    /** @description 툴팁 Show / Hide 여부 */
    isOpen: boolean;
  }
>;

/**
 * @name 툴팁컨텐츠컴포넌트
 */
const TooltipContent = forwardRef<HTMLDivElement, TooltipProps>(
  ({ type = 'strong', position = 'center-top', content, className, isOpen, ...props }, ref) => {
    const rootClassName = tw(styles.root, styles[type], styles[position], className);
    const wrappedContent = wrapTooltipChildren(content);

    return (
      <Portal>
        {isOpen && (
          <div ref={ref} className={rootClassName} {...props}>
            {wrappedContent}
            <TooltipArrow className={styles.arrow} type={type} position={position} />
          </div>
        )}
      </Portal>
    );
  }
);

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
