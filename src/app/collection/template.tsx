'use client';

import { usePathname } from 'next/navigation';

import Badge from '@/components/Badge/Badge';
import Tab from '@/components/Tab/Tab';
import { useGetAiRecommendCount } from '@/hooks/reactQuery/ai/query';
import { useGetExperienceCount } from '@/hooks/reactQuery/experience/qeury';
import { useGetResumesCount } from '@/hooks/reactQuery/resume/query';
import { COLLECTION_TABS } from '@/shared/constants/tabs';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';

const Template = ({ children }: { children: React.ReactNode }) => {
  const currentPath = usePathname();

  const { data: experienceCount } = useGetExperienceCount();
  const { data: resumeCount } = useGetResumesCount();
  const { data: aiRecommendCount } = useGetAiRecommendCount();
  const counts = [experienceCount?.experience || 0, resumeCount?.resume || 0, aiRecommendCount?.count || 0];

  const shownCollectionTabs = COLLECTION_TABS.map((tab, index) => {
    return { ...tab, count: counts[index] };
  });

  return (
    <div className="min-w-[1200px]">
      <div className="flex flex-row gap-5">
        {shownCollectionTabs.map(({ title, pathname, count }) => (
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
