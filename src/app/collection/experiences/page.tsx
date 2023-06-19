'use client';

import Badge from '@/components/Badge/Badge';
import TextButton from '@/components/Button/TextButton';
import Chip from '@/components/Chip/Chip';
import IconClock from '@/components/Icon/IconClock';
import { useState } from 'react';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';
import { Capacity, Experience } from '@/features/collection/types';
import ExperienceCard from '@/features/collection/components/cards/ExperienceCard';
import dayjs from 'dayjs';

const Page = () => {
  const EXPERIENCE_FILTER_BY_TIME = ['경험시간순', '작성시간순'];
  const capabilities: Capacity[] = [
    {
      id: 1234,
      keyword: '문제해결력',
      count: 4,
    },
    {
      id: 1235,
      keyword: '협동력',
      count: 100,
    },
    {
      id: 1236,
      keyword: '커뮤니케이션',
      count: 5,
    },
    {
      id: 1237,
      keyword: '도전정신',
      count: 7,
    },
    {
      id: 1238,
      keyword: '고객지향성',
      count: 13,
    },
    {
      id: 1239,
      keyword: '기획력',
      count: 13,
    },
  ];

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
      summary: ['경험요약1', '경험요약2'],
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
      summary: ['경험요약1', '경험요약2'],
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
      summary: ['경험요약1', '경험요약2'],
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
      summary: ['경험요약1', '경험요약2'],
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
      summary: ['경험요약1', '경험요약2'],
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
      summary: ['경험요약1', '경험요약2'],
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
      summary: ['경험요약1', '경험요약2'],
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
      summary: ['경험요약1', '경험요약2'],
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

  const getAllCapacityBadgeItem = (target: Capacity[]): Capacity => {
    return {
      id: 0,
      keyword: '전체',
      count: target.reduce((acc, { count }) => acc + count, 0),
    };
  };

  const shownCapabilities: Capacity[] = [getAllCapacityBadgeItem(capabilities), ...capabilities];

  const [isSortedByUpdatedAt, setIsSortedByUpdatedAt] = useState(false);
  const [selectedCapacityId, setSelectedCapacityId] = useState(shownCapabilities[0].id);

  const handleTimeSortClick = () => {
    setIsSortedByUpdatedAt((isSortedByUpdatedAt) => !isSortedByUpdatedAt);
  };

  const getFilterExperiencesBySelecedId = (experiences: Experience[], selectedCapacityId: number) => {
    return selectedCapacityId === 0
      ? experiences
      : experiences.filter((experience) =>
          experience.capabilities.find((capacity) => capacity.id === selectedCapacityId)
        );
  };

  const getSortedExperienceByExperienceTimeFilter = (experiences: Experience[], isSortedByUpdatedAt: boolean) =>
    experiences.sort((a, b) => {
      const sortedA = isSortedByUpdatedAt ? dayjs(a.updatedAt).valueOf() : dayjs(a.startDate).valueOf();
      const sortedB = isSortedByUpdatedAt ? dayjs(b.updatedAt).valueOf() : dayjs(b.startDate).valueOf();
      return sortedB - sortedA;
    });

  const _experiences = getFilterExperiencesBySelecedId(experiences, selectedCapacityId);
  const __experiences = getSortedExperienceByExperienceTimeFilter(_experiences, isSortedByUpdatedAt);

  return (
    <>
      <section className="flex flex-row justify-between items-center my-[24px]">
        <nav className="flex flex-row gap-[8px]">
          {shownCapabilities.map(({ id, keyword, count }) => (
            <li key={id} className="list-none">
              <Chip
                size="M"
                variant={selectedCapacityId === id ? 'secondary-pressed' : 'secondary'}
                badge={
                  <Badge variant="gray100-outline" size="S">
                    {addPlusMarkOver99(count)}
                  </Badge>
                }
                onClick={() => setSelectedCapacityId(id)}>
                {keyword}
              </Chip>
            </li>
          ))}
        </nav>
        <div>
          {/* TODO: TextButton Svg 색상 처리 필요 */}
          <TextButton size="L" leftIcon={<IconClock className="fill-none" />} onClick={handleTimeSortClick}>
            {EXPERIENCE_FILTER_BY_TIME[+isSortedByUpdatedAt]}
          </TextButton>
        </div>
      </section>
      <section className="mt-[24px]">
        <ul className="grid grid-cols-3 gap-[16px]">
          {__experiences.map((experience: Experience) => (
            <li key={experience.id}>
              <ExperienceCard {...experience} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Page;
