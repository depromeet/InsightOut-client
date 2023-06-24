import cn from 'classnames';
import styles from './CategoryCard.module.scss';
import { ReactElement } from 'react';

type CategoryCardProps = MergeComponentProps<
  'div',
  {
    icon: ReactElement<SVGAElement>;
    title: string;
    isSelected?: boolean;
  }
>;

const CategoryCard = ({ className, icon, title, isSelected, ...props }: CategoryCardProps) => {
  const rootClassName = cn(styles.root, { [styles.selected]: isSelected }, className);

  return (
    <div className={rootClassName} {...props}>
      <div className={styles['icon-wrapper']}>{icon}</div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default CategoryCard;
