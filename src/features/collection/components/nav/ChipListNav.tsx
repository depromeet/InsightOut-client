import { Dispatch, ReactNode, SetStateAction } from 'react';

import Badge from '@/components/Badge/Badge';
import Chip from '@/components/Chip/Chip';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';

type Props<T> = {
  items: T[];
  selectedItem: number;
  changeItem?: Dispatch<SetStateAction<number>>;
  Right?: ReactNode;
};

type Item = {
  id: number;
  count?: number;
  keyword?: string;
  title?: string;
};

const ChipListNav = <T extends Item>({ items, selectedItem, changeItem, Right }: Props<T>) => {
  return (
    <section className="flex flex-row justify-between items-center my-[24px]">
      <nav>
        <ul className="flex flex-row gap-[8px]">
          {items.map(({ id, count, keyword, title }: T) => {
            const content = keyword || title || '';
            return (
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
                  {content}
                </Chip>
              </li>
            );
          })}
        </ul>
      </nav>
      {Right}
    </section>
  );
};

export default ChipListNav;
