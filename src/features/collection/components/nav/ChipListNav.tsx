import { ReactNode } from 'react';

import Badge from '@/components/Badge/Badge';
import Chip from '@/components/Chip/Chip';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';

type Props<T> = {
  items: T[];
  selectedItem: string;
  changeItem?: (keyword: string) => void;
  Right?: ReactNode;
  chipSize?: ChipSize;
};

type Item = {
  id: number;
  count?: number;
  keyword: string;
};

const ChipListNav = <T extends Item>({ items, selectedItem, changeItem, Right, chipSize = 'M' }: Props<T>) => {
  return (
    <section className="flex flex-row justify-between items-center my-[24px]">
      <nav className="flex flex-row gap-[8px] flex-shrink-0">
        {items.map(({ id, count, keyword }: T) => (
          <li key={id} className="list-none">
            <Chip
              size={chipSize}
              variant={selectedItem === keyword ? 'secondary-pressed' : 'secondary'}
              badge={
                count ? (
                  <Badge variant="gray100-outline" size="S">
                    {addPlusMarkOver99(count)}
                  </Badge>
                ) : undefined
              }
              onClick={changeItem ? () => changeItem(keyword) : undefined}>
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
