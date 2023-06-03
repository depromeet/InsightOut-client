'use client';

import Badge from '@/components/Badge/Badge';
import Tab from '@/components/Tab/Tab';
// import { usePathname } from 'next/navigation';
import { useRouter, usePathname } from 'next/navigation';
import { COLLECTION_TABS } from '../shared/constants/tabs';

const Template = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const currentPath = usePathname();

  return (
    <div>
      <div className="flex flex-row gap-5">
        {COLLECTION_TABS.map(({ title, pathname, count }) => (
          <Tab
            href={`/collection/${pathname}`}
            key={title}
            size="lg"
            badge={
              <Badge style="dark" size="lg">
                {count}
              </Badge>
            }
            variant={currentPath === `/collection/${pathname}` ? 'pressed' : 'default'}
            onClick={() => {
              router.push(`/collection/${pathname}`);
            }}>
            {title}
          </Tab>
        ))}
      </div>
      {children}
    </div>
  );
};

export default Template;
