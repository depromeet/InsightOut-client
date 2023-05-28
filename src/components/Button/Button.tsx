import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  variant: ButtonVariant;
  size: ButtonSize;
  children?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
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
