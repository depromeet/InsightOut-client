import { forwardRef } from 'react';

import cn from 'classnames';

import styles from './Badge.module.scss';

type BadgeProps = MergeComponentProps<
  'div',
  {
    /** @description 뱃지 스타일 (tertiary, outlined-primary, outlined-secondary, filled-primary, filled-secondary, dark) */
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
  ({ variant = 'gray100-outline', size = 'M', children, className, ...props }, ref) => {
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
