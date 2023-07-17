import { ReactNode } from 'react';

import Badge from '@/components/Badge/Badge';
import Chip from '@/components/Chip/Chip';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';

type Props<T> = {
  items: T[];
  selectedItem: string | undefined;
  changeItem?: (keyword: T) => void;
  Right?: ReactNode;
  chipSize?: ChipSize;
};

type Item = {
  id?: number;
  count?: number;
  keyword?: string;
  title?: string;
};

const ChipListNav = <T extends Item | string>({ items, selectedItem, changeItem, Right }: Props<T>) => {
  return (
    <section className="flex flex-row justify-between items-center my-[24px] ">
      <nav className="flex flex-row items-center gap-[8px] h-[54px] overflow-x-auto whitespace-nowrap scrollbar-hide">
        {items.map((item: T) => {
          if (typeof item === 'string') {
            return (
              <li key={item} className="list-none">
                <Chip
                  size="M"
                  variant={selectedItem === item ? 'secondary-pressed' : 'secondary'}
                  onClick={changeItem ? () => changeItem(item) : undefined}>
                  {item}
                </Chip>
              </li>
            );
          } else {
            const { id, count, keyword, title } = item;
            const chipContents = keyword || title || '';
            return (
              <li key={id} className="list-none">
                <Chip
                  size="M"
                  variant={selectedItem === chipContents ? 'secondary-pressed' : 'secondary'}
                  badge={
                    count ? (
                      <Badge variant="gray100-outline" size="S">
                        {addPlusMarkOver99(count)}
                      </Badge>
                    ) : undefined
                  }
                  onClick={changeItem ? () => changeItem(item) : undefined}>
                  {chipContents}
                </Chip>
              </li>
            );
          }
        })}
      </nav>
      {Right}
    </section>
  );
};

export default ChipListNav;
