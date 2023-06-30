import { forwardRef } from 'react';

import cn from 'classnames';

import styles from './Badge.module.scss';

type BadgeProps = MergeComponentProps<
  'div',
  {
    /** @description 뱃지 스타일 (primary500, primary50-outline, secondary400, secondary50-outline, gray100-outline, gray900) */
    variant: BadgeVariant;
    /** @description 뱃지 사이즈 (S, M, L) */
    size: BadgeSize;
    /** @description 뱃지 텍스트 */
    children: string | number;
  }
>;

/**
 * @name 뱃지컴포넌트
 */
const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant = 'gray-100-outline', size = 'md', children, className, ...props }, ref) => {
    const rootClassName = cn(styles.root, styles[variant], styles[size], className);

    return (
      <div ref={ref} className={rootClassName} {...props}>
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
