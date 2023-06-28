import { PropsWithChildren } from 'react';

import resumeApi from '@/apis/resume/resume';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import Aside from '@/features/resume/components/Aside/Aside';
import ExperienceCardList from '@/features/resume/components/ExperienceCardList/ExperienceCardList';
import { RESUME_KEY } from '@/shared/constants/querykeys';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-max bg-gray-50">
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration queryKey={[RESUME_KEY.lists()]} queryFn={() => resumeApi.get()}>
        <Aside />
      </PrefetchHydration>
      <div className="flex mt-[19px] gap-[20px] px-[10px] max-[1536px]:flex-col max-[1536px]:pl-[101px] ">
        {children}
        <ExperienceCardList />
      </div>
    </div>
  );
};

export default Layout;
