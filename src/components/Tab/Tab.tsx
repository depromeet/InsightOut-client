import React, { ReactElement } from 'react';
import cn from 'classnames';
import styles from './Tab.module.scss';

type TabProps = MergeComponentProps<
  'div',
  {
    /** @description 탭 크기 (xs, sm, md, lg) */
    size: TabSize;
    /** @description 탭 텍스트 */
    children: string;
    /** @description Badge 컴포넌트 */
    badge?: ReactElement;
  }
>;

/**
 * @name 탭컴포넌트
 */
const Tab = ({ size, className, children, badge, ...props }: TabProps) => {
  const rootClassName = cn(styles.root, styles[size], { [styles.badge]: !!badge }, className);

  return (
    <div className={rootClassName} {...props}>
      {children}
      {badge}
    </div>
  );
};

export default Tab;
