import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import { EXPERIENCE_CAPABILITY_KEY } from '@/shared/constants/querykeys';

import ExperienceCardDetail from './ExperienceCardDetail';
import ExperienceCardList from './ExperienceCardList';
import MyExperienceCardHeader from './MyExperienceCardHeader';

const MyExperienceCard = () => {
  return (
    <section className="resume-section h-[976px] shadow-toast">
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration queryKey={EXPERIENCE_CAPABILITY_KEY.lists()} queryFn={() => EXPERIENCE_CAPABILITY_API.get()}>
        <MyExperienceCardHeader />
      </PrefetchHydration>
      <hr aria-orientation="horizontal" className="border-gray-200"></hr>
      <div className="flex">
        <ExperienceCardList />
        <ExperienceCardDetail />
      </div>
    </section>
  );
};

export default MyExperienceCard;
