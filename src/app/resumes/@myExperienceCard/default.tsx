import { EXPERIENCE_API } from '@/apis/experience/experience';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import ExperienceCardDetail from '@/features/resume/components/MyExperienceCard/ExperienceCardDetail';
import ExperienceCardList from '@/features/resume/components/MyExperienceCard/ExperienceCardList';
import MyExperienceCardHeader from '@/features/resume/components/MyExperienceCard/MyExperienceCardHeader';
import { CARD_COUNT_PER_LOAD } from '@/features/resume/constants/cardCountPerLoad';
import { EXPERIENCE_CAPABILITY_KEY, EXPERIENCE_KEY } from '@/shared/constants/querykeys';

const Page = () => {
  return (
    <section className="resume-section h-[976px] shadow-toast">
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration queryKey={EXPERIENCE_CAPABILITY_KEY.lists()} queryFn={() => EXPERIENCE_CAPABILITY_API.get()}>
        <MyExperienceCardHeader />
      </PrefetchHydration>
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

export default Page;
