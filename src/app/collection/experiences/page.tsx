'use client';

import { useMemo, useState } from 'react';

import { notFound } from 'next/navigation';

import Badge from '@/components/Badge/Badge';
import TextButton from '@/components/Button/TextButton';
import Chip from '@/components/Chip/Chip';
import IconClock from '@/components/Icon/IconClock';
import ExperienceListCard from '@/features/collection/components/cards/ExperienceListCard/ExperienceListCard';
import { EXPERIENCE_SORT_BY } from '@/features/collection/constants';
import { Experience } from '@/features/collection/types';
import getFilteredExperiences from '@/features/collection/utils/getFilteredExperiences';
import getSortedExperiences from '@/features/collection/utils/getSortedExperiences';
import { useGetExperienceCapabilities, useGetInfiniteExperiences } from '@/hooks/reactQuery/experience/qeury';
import useIntersection from '@/hooks/useIntersection';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';

const Page = () => {
  const { data: capabilities } = useGetExperienceCapabilities();
  const [sortBy, setSortBy] = useState<keyof typeof EXPERIENCE_SORT_BY>('createdAt');

  const params = {
    take: 3,
    criteria: sortBy,
  };

  const { data, fetchNextPage, hasNextPage, isFetching, isSuccess } = useGetInfiniteExperiences(params);

  const experiences = useMemo(() => (data ? data.pages.flatMap(({ data }) => data) : []), [data]);

  const ref = useIntersection((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) fetchNextPage();
  });

  const [selectedCapabilityKeyword, setSelectedCapabilityKeyword] = useState('전체');

  const handleTimeSortClick = () => {
    setSortBy(() => (sortBy === 'createdAt' ? 'startDate' : 'createdAt'));
  };

  let shownExperiences = experiences ?? [];
  if (experiences) {
    const _experiences =
      selectedCapabilityKeyword === '전체'
        ? experiences ?? []
        : getFilteredExperiences(experiences, selectedCapabilityKeyword);

    shownExperiences = getSortedExperiences(_experiences, sortBy);
  }

  if (isSuccess && experiences.length === 0) {
    notFound();
  }

  return (
    <div>
      <section className="flex flex-row justify-between items-center my-[24px]">
        <nav className="w-full flex flex-row gap-[8px] flex-shrink-0 overflow-x-auto whitespace-nowrap scrollbar-hide p-[1px]">
          {capabilities?.map(({ id, keyword, count }) => (
            <li key={id} className="list-none">
              <Chip
                size="M"
                variant={keyword === selectedCapabilityKeyword ? 'secondary-pressed' : 'secondary'}
                badge={
                  count ? (
                    <Badge variant="gray100-outline" size="S">
                      {addPlusMarkOver99(count)}
                    </Badge>
                  ) : undefined
                }
                onClick={() => setSelectedCapabilityKeyword(keyword)}>
                {keyword}
              </Chip>
            </li>
          ))}
        </nav>
        <div className="flex-shrink-0">
          <TextButton size="L" leftIcon={<IconClock className="fill-none" />} onClick={handleTimeSortClick}>
            {EXPERIENCE_SORT_BY[sortBy]}
          </TextButton>
        </div>
      </section>
      <section className="mt-[24px]">
        <ul className="grid grid-cols-3 gap-[16px]">
          {shownExperiences.map((experience: Experience) => (
            <li key={experience.id}>
              <ExperienceListCard {...experience} />
            </li>
          ))}
          <div ref={ref}></div>
        </ul>
      </section>
    </div>
  );
};

export default Page;
