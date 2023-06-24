import { PropsWithChildren } from 'react';

import Aside from '@/features/resume/components/Aside/Aside';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import resumeApi from '@/apis/resume/resume';
import { QUERY_KEY } from '@/shared/constants/queryKey';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex h-full bg-gray-50">
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration
        queryKey={[QUERY_KEY.resumes]}
        queryFn={async () => {
          const {
            data: { data },
          } = await resumeApi.get();
          return data;
        }}>
        <Aside />
      </PrefetchHydration>
      <div className="mx-[10px] mt-[19px]">{children}</div>
      <div className="mx-[10px] mt-[19px]">
        <section className="flex flex-col min-w-[699px] border-[1px] border-primary-100 shadow-toast rounded-3xl bg-white">
          {/* 경험 카드 리스트 */}
        </section>
      </div>
    </div>
  );
};

export default Layout;
