'use client';

import { useState } from 'react';

import TextButton from '@/components/Button/TextButton';
import IconClock from '@/components/Icon/IconClock';
import ExperienceListCard from '@/features/collection/components/cards/ExperienceListCard/ExperienceListCard';
import ChipListNav from '@/features/collection/components/nav/ChipListNav';
import { EXPERIENCE_SORT_BY } from '@/features/collection/constants';
import { Capability, Experience } from '@/features/collection/types';
import getAllCapability from '@/features/collection/utils/getAllCapabilityBadgeItem';
import getFilteredExperiences from '@/features/collection/utils/getFilteredExperiences';
import getSortedExperiences from '@/features/collection/utils/getSortedExperiences';
import { useGetExperienceCapabilities, useGetExperiences } from '@/hooks/reactQuery/experience/qeury';

const Page = () => {
  const { data: capabilities } = useGetExperienceCapabilities();

  const _capabilites = capabilities || [];

  const { data: experiences } = useGetExperiences();

  // TODO: notFound 처리
  // if (!experiences) notFound();

  const allCapability = getAllCapability(_capabilites);

  const shownCapabilities: Capability[] = [allCapability, ..._capabilites];

  const [sortBy, setSortBy] = useState<keyof typeof EXPERIENCE_SORT_BY>('EXPERIENCE_TIME');
  const [selectedCapability, setSelectedCapability] = useState(allCapability);

  const handleTimeSortClick = () => {
    setSortBy(() => (sortBy === 'EXPERIENCE_TIME' ? 'UPDATED_AT' : 'EXPERIENCE_TIME'));
  };

  // TODO: 백엔드와 경험 시간 값을 논의 refactor
  let __experiences = experiences?.data || [];
  if (experiences?.data) {
    const _experiences =
      selectedCapability.keyword === allCapability.keyword
        ? experiences?.data ?? []
        : getFilteredExperiences(experiences?.data ?? [], selectedCapability.keyword);

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
        </ul>
      </section>
    </>
  );
};

export default Page;
