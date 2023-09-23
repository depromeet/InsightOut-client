'use client';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { AiResponse } from '@/apis/ai/types/ai';
import ExperienceCard from '@/features/collection/components/cards/ExperienceCard/ExperienceCard';
import getExperiencePeriod from '@/features/collection/utils/getExperiencePeriod';
import Confetti from '@/features/experience/Confetti';
import Loading from '@/features/experience/Loading';
import { useSubmitExperience } from '@/hooks/reactQuery/ai/mutation';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';
import { EXPERIENCE_LIST_CARD_MESSAGE } from '@/shared/constants/messages';

const CompletePage = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [aiExperience, setAiExperience] = useState<AiResponse['submit']>();
  const [isShowConfetti, setIsShowConfetti] = useState(false);

  const experienceId = Number(useSearchParams().get('experienceId')) ?? '0';
  const { mutate: createAiExperienceCard, isLoading: isLoadingExperienceCard } = useSubmitExperience({
    onSuccess: (data) => {
      setIsShowConfetti(true);
      setAiExperience(data);
    },
  });

  const { data: experience, isLoading: isLoadingSTAR } = useGetExperience(
    { experienceId },
    {
      enabled: !showLoading,
      onSuccess: (data) => {
        const payload = {
          experienceId,
          situation: data?.situation,
          task: data?.task,
          action: data?.action,
          result: data?.result,
        };
        createAiExperienceCard(payload);
      },
    }
  );

  useEffect(() => {
    if (showLoading) {
      setTimeout(() => {
        setShowLoading(false);
      }, 3000);
    }
  }, [showLoading]);

  if (showLoading || isLoadingSTAR || isLoadingExperienceCard) return <Loading className="mx-auto mt-[250px]" />;

  const period =
    experience?.startDate && experience?.endDate
      ? getExperiencePeriod(experience?.startDate, experience?.endDate)
      : EXPERIENCE_LIST_CARD_MESSAGE.NOT_HAS_PERIOD;
  const star = [experience?.situation, experience?.task, experience?.action, experience?.result].join('\n\n');

  const experienceCardProps = {
    period: period,
    title: experience?.title!,
    summaryKeywords: aiExperience?.summaryKeywords,
    experienceCapabilityKeywords: aiExperience?.ExperienceCapability,
    aiRecommendKeywords: aiExperience?.AiResume?.AiResumeCapability?.map((capability) => capability),
    experienceStatus: aiExperience?.experienceStatus!,
    experienceInfo: experience?.ExperienceInfo,
    star: star,
    aiResume: aiExperience?.AiResume?.content,
    aiRecommendQuestions: aiExperience?.AiRecommendQuestion,
  };

  return (
    <>
      <div className="mx-auto mt-[250px] w-fit">
        {aiExperience && (
          <>
            <ExperienceCard {...experienceCardProps} />
            {isShowConfetti && <Confetti />}
          </>
        )}
      </div>
    </>
  );
};

export default CompletePage;
