import { ComponentPropsWithRef, ReactNode, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  variant: ButtonVariant;
  size: ButtonSize;
  children?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, leftIcon, rightIcon, ...props }, ref) => {
    const isIconButton = leftIcon || rightIcon;
    const rootClassName = cn(styles.root, styles[variant], styles[size], isIconButton && styles['icon'], className);

    return (
      <button ref={ref} className={rootClassName} {...props}>
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
