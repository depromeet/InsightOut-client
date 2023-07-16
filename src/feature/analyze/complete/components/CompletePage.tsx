'use client';

import { useSearchParams } from 'next/navigation';

import ExperienceCard from '@/features/collection/components/cards/ExperienceCard/ExperienceCard';
import { MESSAGE } from '@/features/collection/constants';
import getExperiencePeriod from '@/features/collection/utils/getExperiencePeriod';
import Loading from '@/features/experience/Loading';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';

const CompletePage = () => {
  const experienceId = Number(useSearchParams().get('experienceId')) ?? '0';

  const { data: experience } = useGetExperience({ experienceId }, { onError: () => console.log('어떻게할까') });

  console.log(experience);
  console.log(experience?.AiResume?.AiResumeCapabilities.map(({ Capability }) => Capability));
  const experienceCardProps = {
    period:
      experience?.startDate && experience?.endDate
        ? getExperiencePeriod(experience?.startDate, experience?.endDate)
        : MESSAGE.HAS_NOT_PERIOD,
    title: experience?.title,
    summaryKeywords: experience?.summaryKeywords,
    experienceCapabilityKeywords: experience?.experienceCapabilityKeywords,
    aiRecommendKeywords: experience?.AiResume?.AiResumeCapabilities.map(({ Capability }) => Capability.keyword),
    experienceStatus: experience?.experienceStatus,
  };

  return (
    <div>
      <Loading className="mx-auto mt-[250px]" />
      <div className="mx-auto mt-[250px] w-fit">
        <ExperienceCard {...experienceCardProps} />
      </div>
    </div>
  );
};

export default CompletePage;
