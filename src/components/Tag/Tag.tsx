import { ComponentProps } from 'react';

import cn from 'classnames';

import styles from './Tag.module.scss';

interface TagProps extends Omit<ComponentProps<'span'>, 'children'> {
  variant: TagVariant;
  size: TagSize;
  children: string;
}

const Tag = ({ variant = 'primary50', size, children, className, ...props }: TagProps) => {
  const rootClassName = cn(styles.root, styles[variant], styles[size], className);

  return (
    <span className={rootClassName} {...props}>
      {children}
    </span>
  );
};

export default Tag;
