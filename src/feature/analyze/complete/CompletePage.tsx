'use client';

import { useSearchParams } from 'next/navigation';

import ExperienceCard from '@/features/collection/components/cards/ExperienceCard/ExperienceCard';
import Loading from '@/features/experience/Loading';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';

const CompletePage = () => {
  const experienceId = Number(useSearchParams().get('experienceId')) ?? '0';

  const { data } = useGetExperience({ experienceId });

  console.log(experienceId);
  console.log(data);

  return (
    <div>
      <Loading className="mx-auto mt-[250px]" />
      <div className="mx-auto mt-[250px] w-fit">
        <ExperienceCard
          period={'2023.04 - 2023.08'}
          title={'첫번째 경험카드'}
          experienceStatus={'DONE'}
          summaryKeywords={['키워드1', '키워드2']}
          experienceCapabilityKeywords={['일이삼사오육칠팔구', '일이삼사오육칠팔구']}
          aiRecommendKeywords={['일이삼사오육칠팔구', '일이삼사오육칠팔구']}
        />
      </div>
    </div>
  );
};

export default CompletePage;
