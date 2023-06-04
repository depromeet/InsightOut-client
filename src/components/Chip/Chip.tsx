import { ReactElement, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Chip.module.scss';

type ChipProps = MergeComponentProps<
  'button',
  {
    /** @description 칩 종류 (primary, secondary) */
    variant: ChipVariant;
    /** @description 칩 크기 (sm, md) */
    size: ChipSize;
    /** @description 칩 텍스트 */
    children: string;
    /** @description 뱃지 */
    badge?: ReactElement;
  }
>;

/**
 * @name 칩컴포넌트
 */
const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ variant, size, children, className, badge, ...props }, ref) => {
    const rootClassName = cn(styles.root, styles[variant], styles[size], { [styles.badge]: !!badge }, className);

    return (
      <button ref={ref} className={rootClassName} {...props}>
        {children}
        {badge}
      </button>
    );
  }
);

Chip.displayName = 'Chip';

export default Chip;
