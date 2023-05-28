import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import cn from 'classnames';
import styles from './TextButton.module.scss';

interface TextButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  /** 버튼 사이즈 (sm, md, lg, xl) */
  size: ButtonSize;
  /** 버튼 텍스트 */
  children?: string;
  /** 왼쪽 아이콘 */
  leftIcon?: ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: ReactNode;
  /** underline 여부 */
  underline?: boolean;
}

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
