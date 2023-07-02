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

  // if (!experiences) notFound();

  const allCapability = getAllCapability(_capabilites);

  const shownCapabilities: Capability[] = [allCapability, ..._capabilites];

  const [sortBy, setSortBy] = useState<keyof typeof EXPERIENCE_SORT_BY>('EXPERIENCE_TIME');
  const [selectedCapabilitykeyword, setSelectedCapabilityKeyword] = useState(allCapability.keyword);

  const handleTimeSortClick = () => {
    setSortBy(() => (sortBy === 'EXPERIENCE_TIME' ? 'UPDATED_AT' : 'EXPERIENCE_TIME'));
  };

  // TODO: refactor
  let __experiences = experiences?.data || [];
  if (experiences?.data) {
    const _experiences =
      selectedCapabilitykeyword === allCapability.keyword
        ? experiences?.data ?? []
        : getFilteredExperiences(experiences?.data ?? [], selectedCapabilitykeyword);

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
        </ul>
      </section>
    </>
  );
};

export default Page;
