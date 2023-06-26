import Chip from '@/components/Chip/Chip';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';
import Badge from '@/components/Badge/Badge';
import { Dispatch, ReactNode, SetStateAction } from 'react';

type Props<T> = {
  items: T[];
  selectedItem: number;
  changeItem?: Dispatch<SetStateAction<number>>;
  Right?: ReactNode;
};

type Item = {
  id: number;
  count?: number;
  keyword: string;
};

const ChipListNav = <T extends Item>({ items, selectedItem, changeItem, Right }: Props<T>) => {
  return (
    <section className="flex flex-row justify-between items-center my-[24px]">
      <nav className="flex flex-row gap-[8px]">
        {items.map(({ id, count, keyword }: T) => (
          <li key={id} className="list-none">
            <Chip
              size="M"
              variant={selectedItem === id ? 'secondary-pressed' : 'secondary'}
              badge={
                count ? (
                  <Badge variant="gray100-outline" size="S">
                    {addPlusMarkOver99(count)}
                  </Badge>
                ) : undefined
              }
              onClick={changeItem ? () => changeItem(id) : undefined}>
              {keyword}
            </Chip>
          </li>
        ))}
      </nav>
      {Right}
    </section>
  );
};

export default ChipListNav;
