import resumeApi from '@/apis/resume/resume';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import Aside from '@/features/resume/components/Aside/Aside';
import { RESUME_KEY } from '@/shared/constants/querykeys';

const Page = () => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration queryKey={RESUME_KEY.lists()} queryFn={() => resumeApi.get()}>
        <Aside />
      </PrefetchHydration>
    </>
  );
};

export default Page;
