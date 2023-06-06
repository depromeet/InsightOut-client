import React, { ReactElement } from 'react';
import cn from 'classnames';
import styles from './Tab.module.scss';
import Link from 'next/link';
import { UrlObject } from 'url';

type TabProps = MergeComponentProps<
  'a',
  {
    href: UrlObject | __next_route_internal_types__.RouteImpl<string>;
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
