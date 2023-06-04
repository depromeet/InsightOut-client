import cn from 'classnames';
import styles from './Badge.module.scss';

type BadgeProps = MergeComponentProps<
  'div',
  {
    /** @description 뱃지 스타일 (tertiary, outlined-purple, outlined-cyan, filled-purple, filled-cyan, dark) */
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
const Badge = ({ style = 'tertiary', size = 'md', children, className, ...props }: BadgeProps) => {
  const rootClassName = cn(styles.root, styles[style], styles[size], className);

  return (
    <div className={rootClassName} {...props}>
      {children}
    </div>
  );
};

export default Badge;
