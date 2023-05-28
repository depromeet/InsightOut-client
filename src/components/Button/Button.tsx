import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  /** 버튼 종류 (primary, secondary, tertiary, secondary-green, outlined) */
  variant: ButtonVariant;
  /** 버튼 사이즈 (sm, md, lg, xl) */
  size: ButtonSize;
  /** 버튼 텍스트 */
  children?: string;
  /** 왼쪽 아이콘 */
  leftIcon?: ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: ReactNode;
  /** Icon Only 버튼의 아이콘 (해당 Prop 사용 시 leftIcon, rightIcon, children은 렌더링되지 않습니다) */
  onlyIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, leftIcon, rightIcon, onlyIcon, ...props }, ref) => {
    const isIconOnlyButton = !!onlyIcon;
    const rootClassName = cn(
      styles.root,
      styles[variant],
      styles[size],
      isIconOnlyButton && styles['icon-only'],
      className
    );

    return (
      <button ref={ref} className={rootClassName} {...props}>
        {onlyIcon ? (
          onlyIcon
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
