import React from 'react';

import classNames from 'classnames';

import TooltipArrow from '@/components/Tooltip/TooltipArrow';
import { tw } from '@/shared/utils/tailwindMerge';

import styles from './TooltipContent.module.scss';

type TooltipProps = MergeComponentProps<
  'div',
  {
    /** @description 툴팁 타입 (strong, light, primary) */
    type: TooltipType;
    /** @description 툴팁 포지션 (center-top, center-bottom, right-top, right-bottom, left-top, left-bottom, side-left-center, side-right-center) */
    position: TooltipPosition;
    /** @description 툴팁 텍스트 */
    content: string | JSX.Element;
    /** @description 툴팁 Show / Hide 여부 */
    isOpen: boolean;
  }
>;

/**
 * @description position이 relative인 tooltip
 */
const TooltipRelativeContent = ({
  type = 'primary',
  position = 'center-top',
  content,
  className,
  isOpen,
  ...props
}: TooltipProps) => {
  const rootClassName = tw(styles['root-relative'], styles[type], styles[position], className);

  return (
    <React.Fragment>
      {isOpen && (
        <div className={classNames(rootClassName, 'text-center', 'b1')} {...props}>
          {content}
          <TooltipArrow className={styles.arrow} type={type} position={position} />
        </div>
      )}
    </React.Fragment>
  );
};

export default TooltipRelativeContent;
