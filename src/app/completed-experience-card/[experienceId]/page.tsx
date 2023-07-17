'use client';

import ExperienceCard from '@/features/collection/components/cards/ExperienceCard/ExperienceCard';
import Loading from '@/features/experience/Loading';

const page = () => {
  return (
    <>
      <Loading className="mx-auto mt-[250px]" />
      <div className="mx-auto mt-[250px] w-fit">
        <ExperienceCard
          period={'2023.04 - 2023.08'}
          title={'첫번째 경험카드'}
          summaryKeywords={['키워드1', '키워드2']}
          experienceStatus="DONE"
          experienceCapabilityKeywords={['일이삼사오육칠팔구', '일이삼사오육칠팔구']}
          aiRecommendKeywords={['일이삼사오육칠팔구', '일이삼사오육칠팔구']}
        />
      </div>
    </>
  );
};

export default page;
