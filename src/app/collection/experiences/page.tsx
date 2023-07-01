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
import { useGetExperienceCapabilities } from '@/hooks/reactQuery/experience/qeury';

const Page = () => {
  const { data: capabilities } = useGetExperienceCapabilities();

  const _capabilites = capabilities?.capabilities || [];

  // TODO: 경험카드 스키마 전달 받고 적용
  const experiences: Experience[] = [
    {
      id: 1,
      title: '00전자 디자인 인턴',
      startDate: '2022-02-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
      updatedAt: '2023-04-01T00:00:00.000Z',
      experienceStatus: 'INPROGRESS',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감 개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      summaries: ['경험요약1', '경험요약2'],
      capabilities: [
        {
          isAi: false,
          id: 1234,
          keyword: '문제해결력',
        },
        {
          isAi: false,
          id: 1235,
          keyword: '협동력',
        },
        {
          isAi: false,
          id: 1236,
          keyword: '커뮤니케이션',
        },
        {
          isAi: true,
          id: 123,
          keyword: '창의력',
        },
        {
          isAi: true,
          id: 124,
          keyword: '데이터분석',
        },
      ],
    },
    {
      id: 2,
      title: '00물산 영업',
      startDate: '2022-03-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
      updatedAt: '2023-04-02T00:00:00.000Z',
      experienceStatus: 'INPROGRESS',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      summaries: ['경험요약1', '경험요약2'],
      capabilities: [
        {
          isAi: false,
          id: 1237,
          keyword: '도전정신',
        },
        {
          isAi: false,
          id: 1238,
          keyword: '고객지향성',
        },
        {
          isAi: false,
          id: 1239,
          keyword: '기획력',
        },
        {
          isAi: true,
          id: 124,
          keyword: '데이터분석',
        },
      ],
    },
    {
      id: 3,
      title: '00전자 개발',
      startDate: '2020-05-01T00:00:00.000Z',
      endDate: '2020-08-01T00:00:00.000Z',
      updatedAt: '2023-04-03T00:00:00.000Z',
      experienceStatus: 'INPROGRESS',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      summaries: ['경험요약1', '경험요약2'],
      capabilities: [
        {
          isAi: false,
          id: 1234,
          keyword: '문제해결력',
        },
        {
          isAi: false,
          id: 1235,
          keyword: '협동력',
        },
      ],
    },
    {
      id: 4,
      title: '00기획 마케팅',
      startDate: '2023-01-01T00:00:00.000Z',
      endDate: '2023-05-01T00:00:00.000Z',
      updatedAt: '2023-04-04T00:00:00.000Z',
      experienceStatus: 'DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      summaries: ['경험요약1', '경험요약2'],
      capabilities: [
        {
          isAi: false,
          id: 1234,
          keyword: '문제해결력',
        },
        {
          isAi: false,
          id: 1236,
          keyword: '커뮤니케이션',
        },
        {
          isAi: true,
          id: 123,
          keyword: '창의력',
        },
      ],
    },
    {
      id: 5,
      title: '00은행 영업',
      startDate: '2022-01-01T00:00:00.000Z',
      endDate: '2022-03-01T00:00:00.000Z',
      updatedAt: '2023-04-05T00:00:00.000Z',
      experienceStatus: 'DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      summaries: ['경험요약1', '경험요약2'],
      capabilities: [
        {
          isAi: false,
          id: 1235,
          keyword: '협동력',
        },
        {
          isAi: false,
          id: 1236,
          keyword: '커뮤니케이션',
        },
        {
          isAi: true,
          id: 123,
          keyword: '창의력',
        },
      ],
    },
    {
      id: 6,
      title: '00디스플레이 생산관리',
      startDate: '2021-02-01T00:00:00.000Z',
      endDate: '2021-04-01T00:00:00.000Z',
      updatedAt: '2023-04-06T00:00:00.000Z',
      experienceStatus: 'INPROGRESS',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      summaries: ['경험요약1', '경험요약2'],
      capabilities: [
        {
          isAi: false,
          id: 1234,
          keyword: '문제해결력',
        },
        {
          isAi: false,
          id: 1235,
          keyword: '협동력',
        },
        {
          isAi: false,
          id: 1236,
          keyword: '커뮤니케이션',
        },
        {
          isAi: true,
          id: 123,
          keyword: '창의력',
        },
      ],
    },
    {
      id: 7,
      title: '00바이오 연구개발',
      startDate: '2020-06-01T00:00:00.000Z',
      endDate: '2021-12-01T00:00:00.000Z',
      updatedAt: '2023-04-07T00:00:00.000Z',
      experienceStatus: 'INPROGRESS',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      summaries: ['경험요약1', '경험요약2'],
      capabilities: [
        {
          isAi: false,
          id: 1234,
          keyword: '문제해결력',
        },
        {
          isAi: false,
          id: 1235,
          keyword: '협동력',
        },
        {
          isAi: false,
          id: 1236,
          keyword: '커뮤니케이션',
        },
        {
          isAi: true,
          id: 123,
          keyword: '창의력',
        },
      ],
    },
    {
      id: 8,
      title: '00방송 콘텐츠 기획',
      startDate: '2020-02-01T00:00:00.000Z',
      endDate: '2020-04-01T00:00:00.000Z',
      updatedAt: '2023-04-08T00:00:00.000Z',
      experienceStatus: 'INPROGRESS',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감 개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      summaries: ['경험요약1', '경험요약2'],
      capabilities: [
        {
          isAi: false,
          id: 1234,
          keyword: '문제해결력',
        },
        {
          isAi: false,
          id: 1235,
          keyword: '협동력',
        },
        {
          isAi: false,
          id: 1236,
          keyword: '커뮤니케이션',
        },
        {
          isAi: true,
          id: 123,
          keyword: '창의력',
        },
      ],
    },
  ];

  const allCapability = getAllCapability(_capabilites);

  const shownCapabilities: Capability[] = [allCapability, ..._capabilites];

  const [sortBy, setSortBy] = useState<keyof typeof EXPERIENCE_SORT_BY>('EXPERIENCE_TIME');
  const [selectedCapabilityId, setSelectedCapabilityId] = useState(allCapability.id);

  const handleTimeSortClick = () => {
    setSortBy(() => (sortBy === 'EXPERIENCE_TIME' ? 'UPDATED_AT' : 'EXPERIENCE_TIME'));
  };

  const _experiences =
    selectedCapabilityId === allCapability.id ? experiences : getFilteredExperiences(experiences, selectedCapabilityId);

  const __experiences = getSortedExperiences(_experiences, sortBy);

  return (
    <>
      <ChipListNav
        items={shownCapabilities}
        selectedItem={selectedCapabilityId}
        changeItem={setSelectedCapabilityId}
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
