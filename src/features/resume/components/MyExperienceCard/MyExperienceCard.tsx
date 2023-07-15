import { EXPERIENCE_API } from '@/apis/experience/experience';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import { EXPERIENCE_CAPABILITY_KEY, EXPERIENCE_KEY } from '@/shared/constants/querykeys';

import { CARD_COUNT_PER_LOAD } from '../../constants/cardCountPerLoad';
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
      <hr aria-orientation="horizontal" className="border-gray-200" />
      <div className="flex h-[100%] overflow-hidden">
        {/* @ts-expect-error Server Component */}
        <PrefetchHydration
          queryKey={EXPERIENCE_KEY.list([{ take: CARD_COUNT_PER_LOAD }])}
          queryFn={() => EXPERIENCE_API.get({ take: CARD_COUNT_PER_LOAD })}>
          <ExperienceCardList />
        </PrefetchHydration>
        <ExperienceCardDetail />
      </div>
    </section>
  );
};

export default MyExperienceCard;
