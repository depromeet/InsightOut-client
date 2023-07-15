'use client';

import { useMemo, useState } from 'react';

import TextButton from '@/components/Button/TextButton';
import IconClock from '@/components/Icon/IconClock';
import ExperienceListCard from '@/features/collection/components/cards/ExperienceListCard/ExperienceListCard';
import ChipListNav from '@/features/collection/components/nav/ChipListNav';
import { EXPERIENCE_SORT_BY } from '@/features/collection/constants';
import { Capability, Experience } from '@/features/collection/types';
import getAllCapability from '@/features/collection/utils/getAllCapabilityBadgeItem';
import getFilteredExperiences from '@/features/collection/utils/getFilteredExperiences';
import getSortedExperiences from '@/features/collection/utils/getSortedExperiences';
import {
  useGetExperienceCapabilities,
  // useGetExperiences,
  useGetInfiniteExperiences,
} from '@/hooks/reactQuery/experience/qeury';
import useIntersection from '@/hooks/useIntersection';

const Page = () => {
  const { data: capabilities } = useGetExperienceCapabilities();

  const _capabilites = capabilities || [];

  const { data, fetchNextPage, hasNextPage, isFetching } = useGetInfiniteExperiences();
  const experiences = useMemo(() => (data ? data.pages.flatMap(({ data }) => data) : []), [data]);

  const ref = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) fetchNextPage();
  });

  const allCapability = getAllCapability(_capabilites);

  const shownCapabilities: Capability[] = [allCapability, ..._capabilites];

  const [sortBy, setSortBy] = useState<keyof typeof EXPERIENCE_SORT_BY>('EXPERIENCE_TIME');
  const [selectedCapability, setSelectedCapability] = useState(allCapability);

  const handleTimeSortClick = () => {
    setSortBy(() => (sortBy === 'EXPERIENCE_TIME' ? 'UPDATED_AT' : 'EXPERIENCE_TIME'));
  };

  let __experiences = experiences || [];
  if (experiences) {
    const _experiences =
      selectedCapability.keyword === allCapability.keyword
        ? experiences ?? []
        : getFilteredExperiences(experiences ?? [], selectedCapability.keyword);

    __experiences = getSortedExperiences(_experiences, sortBy);
  }

  return (
    <>
      <ChipListNav
        items={shownCapabilities}
        selectedItem={selectedCapability.keyword}
        changeItem={setSelectedCapability}
        Right={
          <div>
            <TextButton size="L" leftIcon={<IconClock className="fill-none" />} onClick={handleTimeSortClick}>
              {EXPERIENCE_SORT_BY[sortBy]}
            </TextButton>
          </div>
        }
      />
      <section className="mt-[24px]">
        <ul className="grid grid-cols-3 gap-[16px]">
          {__experiences.map((experience: Experience) => (
            <li key={experience.id}>
              <ExperienceListCard {...experience} />
            </li>
          ))}
          <div ref={ref}></div>
        </ul>
      </section>
    </>
  );
};

export default Page;
