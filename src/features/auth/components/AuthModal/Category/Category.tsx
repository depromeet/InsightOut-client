import { ReactElement } from 'react';

import cn from 'classnames';

import styles from './Category.module.scss';

type CategoryProps = MergeComponentProps<
  'div',
  {
    icon: ReactElement<SVGAElement>;
    title: string;
    isSelected?: boolean;
  }
>;

const Category = ({ className, icon, title, isSelected, ...props }: CategoryProps) => {
  const rootClassName = cn(styles.root, { [styles.selected]: isSelected }, className);

  return (
    <div className={rootClassName} {...props}>
      <div className={styles['icon-wrapper']}>{icon}</div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default Category;
