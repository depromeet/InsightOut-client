'use client';

import { usePathname } from 'next/navigation';

import Badge from '@/components/Badge/Badge';
import Tab from '@/components/Tab/Tab';
import { COLLECTION_TABS } from '@/shared/constants/tabs';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';

const Template = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();

  return (
    <div className="min-w-[1200px]">
      <div className="flex flex-row gap-5">
        {COLLECTION_TABS.map(({ title, pathname, count }) => (
          <Tab
            href={`/collection/${pathname}`}
            key={title}
            size="lg"
            badge={
              <Badge variant="gray900" size="L">
                {addPlusMarkOver99(count)}
              </Badge>
            }
            variant={currentPath === `/collection/${pathname}` ? 'pressed' : 'default'}>
            {title}
          </Tab>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Template;
