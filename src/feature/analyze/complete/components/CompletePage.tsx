'use client';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import ExperienceCard from '@/features/collection/components/cards/ExperienceCard/ExperienceCard';
import { MESSAGE } from '@/features/collection/constants';
import getExperiencePeriod from '@/features/collection/utils/getExperiencePeriod';
import Confetti from '@/features/experience/Confetti';
import Loading from '@/features/experience/Loading';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';

const CompletePage = () => {
  const [showLoading, setShowLoading] = useState(true);

  const experienceId = Number(useSearchParams().get('experienceId')) ?? '0';

  const { data: experience, isFetching } = useGetExperience(
    { experienceId },
    { enabled: !showLoading, onError: () => console.log('어떻게할까') }
  );

  useEffect(() => {
    if (showLoading) {
      setTimeout(() => {
        setShowLoading(false);
      }, 3000);
    }
  }, [showLoading]);

  if (showLoading || isFetching) return <Loading className="mx-auto mt-[250px]" />;

  const period =
    experience?.startDate && experience?.endDate
      ? getExperiencePeriod(experience?.startDate, experience?.endDate)
      : MESSAGE.HAS_NOT_PERIOD;
  const star = [experience?.situation, experience?.task, experience?.action, experience?.result].join('\n\n');

  const experienceCardProps = {
    period: period,
    title: experience?.title!,
    summaryKeywords: experience?.summaryKeywords,
    experienceCapabilityKeywords: experience?.experienceCapabilityKeywords,
    aiRecommendKeywords: experience?.AiResume?.AiResumeCapabilities.map(({ Capability }) => Capability.keyword),
    experienceStatus: experience?.experienceStatus!,
    experienceInfo: experience?.ExperienceInfo,
    star: star,
    aiResume: experience?.AiResume?.content,
  };

  return (
    <>
      <div className="mx-auto mt-[250px] w-fit">
        <ExperienceCard {...experienceCardProps} />
      </div>
      <Confetti />
    </>
  );
};

export default CompletePage;
