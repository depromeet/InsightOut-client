import cn from 'classnames';
import styles from './Badge.module.scss';
import { forwardRef } from 'react';

type BadgeProps = MergeComponentProps<
  'div',
  {
    /** @description 뱃지 스타일 (tertiary, outlined-primary, outlined-secondary, filled-primary, filled-secondary, dark) */
    style: BadgeStyle;
    /** @description 뱃지 사이즈 (sm, md, lg) */
    size: BadgeSize;
    /** @description 뱃지 텍스트 */
    children: string;
  }
>;

/**
 * @name 뱃지컴포넌트
 */
const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ style = 'tertiary', size = 'md', children, className, ...props }, ref) => {
    const rootClassName = cn(styles.root, styles[style], styles[size], className);

    return (
      <div ref={ref} className={rootClassName} {...props}>
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
