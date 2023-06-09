import React, { ReactElement } from 'react';

import cn from 'classnames';
import Link from 'next/link';

import styles from './Tab.module.scss';

type TabProps = MergeComponentProps<
  'a',
  {
    href: LinkHref;
    /** @description 탭 크기 (xs, sm, md, lg) */
    size: TabSize;
    /** @description Badge 컴포넌트 */
    badge?: ReactElement;

    variant?: TabVariant;
  }
>;

/**
 * @name 탭컴포넌트
 */
const Tab = ({ variant = 'default', href, size, className, children, badge, ...props }: TabProps) => {
  const rootClassName = cn(styles.root, styles[variant], styles[size], { [styles.badge]: !!badge }, className);

  return (
    <Link href={href} className={rootClassName} {...props}>
      {children}
      {badge}
    </Link>
  );
};

export default Tab;
