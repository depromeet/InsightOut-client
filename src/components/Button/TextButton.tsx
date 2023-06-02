import { ReactNode, forwardRef } from 'react';
import cn from 'classnames';
import styles from './TextButton.module.scss';

type TextButtonProps = MergeComponentProps<
  'button',
  {
    /** @description 버튼 사이즈 (sm, md, lg, xl) */
    size: ButtonSize;
    /** @description 버튼 텍스트 */
    children?: string;
    /** @description 왼쪽 아이콘 */
    leftIcon?: ReactNode;
    /** @description 오른쪽 아이콘 */
    rightIcon?: ReactNode;
    /** @description underline 여부 */
    underline?: boolean;
  }
>;

/**
 * @name 텍스트버튼컴포넌트
 */
const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ size = 'md', children, className, leftIcon, rightIcon, underline, ...props }, ref) => {
    const rootClassName = cn(styles.root, styles[size], underline && styles['underline'], className);

    return (
      <button ref={ref} className={rootClassName} {...props}>
        <span>
          {leftIcon}
          {children}
          {rightIcon}
        </span>
      </button>
    );
  }
);

TextButton.displayName = 'TextButton';

export default TextButton;
