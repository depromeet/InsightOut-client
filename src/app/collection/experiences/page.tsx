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

  /**
   * 무한스크롤 적용을 위해 주석처리했습니다.
   * - 무한스크롤 관련 코드: 32 ~ 39줄
   */
  // const { data: experiences } = useGetExperiences();

  const { data, fetchNextPage, hasNextPage, isFetching } = useGetInfiniteExperiences();
  const experiences = useMemo(() => (data ? data.pages.flatMap(({ data }) => data) : []), [data]);

  const ref = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) fetchNextPage();
  });

  // TODO: notFound 처리
  // if (!experiences) notFound();

  const allCapability = getAllCapability(_capabilites);

  const shownCapabilities: Capability[] = [allCapability, ..._capabilites];

  const [sortBy, setSortBy] = useState<keyof typeof EXPERIENCE_SORT_BY>('EXPERIENCE_TIME');
  const [selectedCapabilitykeyword, setSelectedCapabilityKeyword] = useState(allCapability.keyword);

  const handleTimeSortClick = () => {
    setSortBy(() => (sortBy === 'EXPERIENCE_TIME' ? 'UPDATED_AT' : 'EXPERIENCE_TIME'));
  };

  // TODO: 백엔드와 경험 시간 값을 논의 refactor
  let __experiences = experiences || [];
  if (experiences) {
    const _experiences =
      selectedCapabilitykeyword === allCapability.keyword
        ? experiences ?? []
        : getFilteredExperiences(experiences ?? [], selectedCapabilitykeyword);

    __experiences = getSortedExperiences(_experiences, sortBy);
  }

  return (
    <>
      <ChipListNav
        items={shownCapabilities}
        selectedItem={selectedCapabilitykeyword}
        changeItem={setSelectedCapabilityKeyword}
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
