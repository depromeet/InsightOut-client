'use client';

import { useMemo } from 'react';

import { ALL_CAPABILITY_KEYWORD } from '@/features/collection/constants';
import getExperiencePeriod from '@/features/collection/utils/getExperiencePeriod';
import getFilteredExperiences from '@/features/collection/utils/getFilteredExperiences';
import { useGetInfiniteExperiences } from '@/hooks/reactQuery/experience/qeury';
import useIntersection from '@/hooks/useIntersection';

import { CARD_COUNT_PER_LOAD } from '../../constants/cardCountPerLoad';
import { useCapabilityKeyword, useExperienceActions, useExperienceId } from '../../store';
import ExperienceCard from './ExperienceCard';

const ExperienceCardList = () => {
  const experienceId = useExperienceId();
  const { setExperienceId } = useExperienceActions();

  const { data, fetchNextPage, hasNextPage, isFetching } = useGetInfiniteExperiences(
    { take: CARD_COUNT_PER_LOAD },
    {
      onSuccess: ({ pages }) => {
        const firstExperienceId = pages[0].data[0].id;
        setExperienceId(firstExperienceId);
      },
    }
  );

  const experiences = useMemo(
    () =>
      data ? data.pages.flatMap(({ data }) => data.filter(({ experienceStatus }) => experienceStatus === 'DONE')) : [],
    [data]
  );

  const ref = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) fetchNextPage();
  });

  const selectedCapabilitykeyword = useCapabilityKeyword();

  const filteredExperiencesByKeyword =
    selectedCapabilitykeyword === ALL_CAPABILITY_KEYWORD
      ? experiences
      : getFilteredExperiences(experiences, selectedCapabilitykeyword);

  return (
    <div className="relative after:content-[''] after:absolute after:bottom-0 after:w-[100%] after:h-[62px] after:bg-gradient-to-t after:from-[#F1F7FE] after:to-[rgba(243, 249, 255, 0.00)]">
      <ul className="flex flex-col w-[370px] h-[100%] overflow-y-scroll gap-[16px] px-[29px] py-[16px] bg-gradient-to-b from-[#E9E8FF] to-[#F2F9FF]">
        {filteredExperiencesByKeyword?.map(({ id, startDate, endDate, title, summaryKeywords }) => (
          <li key={id} onClick={() => setExperienceId(id)}>
            <ExperienceCard
              selected={id === experienceId}
              date={getExperiencePeriod(startDate, endDate)}
              title={title}
              summaryKeywords={summaryKeywords}
            />
          </li>
        ))}
        <div ref={ref}></div>
      </ul>
    </div>
  );
};

export default ExperienceCardList;
