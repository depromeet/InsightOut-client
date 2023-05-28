import { ComponentPropsWithRef, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant: ButtonVariant;
  size: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, ...props }, ref) => {
    const rootClassName = cn(styles.root, styles[variant], styles[size], className);

    return (
      <button ref={ref} className={rootClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
