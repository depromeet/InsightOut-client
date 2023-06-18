'use client';

import ActionList from '@/components/ActionList/ActionList';
import Badge from '@/components/Badge/Badge';
import TextButton from '@/components/Button/TextButton';
import Chip from '@/components/Chip/Chip';
import IconClock from '@/components/Icon/IconClock';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import Image from 'next/image';
import { useState } from 'react';
import cardImage from '../../../../public/images/card1.png';
import Tag from '@/components/Tag/Tag';
import addPlusMarkOver99 from '@/shared/utils/addPlusMarkOver99';
import { Capacity, Experience } from '@/features/collection/types';
import getExperiencePeriod from '@/features/collection/utils/getExperiencePeriod';
import Keyword from '@/app/analyze/keyword/page';

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

  const getAllCapacityBadgeItem = (target: Capacity[]): Capacity => {
    return {
      id: 0,
      keyword: '전체',
      count: target.reduce((acc, { count }) => acc + count, 0),
    };
  };

  const [filterByTime, setFilterByTime] = useState(false);
  const [selectedCapacity, setselectedCapacity] = useState('전체');

  // TODO: 경험카드 스키마 전달 받고 적용
  const experiences: Experience[] = [
    {
      id: 1,
      title: '00전자 디자인 인턴',
      startDate: '2022-02-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
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
      startDate: '2022-02-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
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
      startDate: '2022-02-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
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
      startDate: '2022-02-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
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
      startDate: '2022-02-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
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
      startDate: '2022-02-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
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
      startDate: '2022-02-01T00:00:00.000Z',
      endDate: '2022-04-01T00:00:00.000Z',
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

  const handleTimeSortOnClick = () => {
    setFilterByTime((filterByTime) => !filterByTime);
  };

  const showncapabilities: Capacity[] = [getAllCapacityBadgeItem(capabilities), ...capabilities];

  return (
    <>
      <section className="flex flex-row justify-between items-center my-[24px]">
        <nav className="flex flex-row gap-[8px]">
          {showncapabilities.map(({ id, keyword, count }) => (
            // TODO: Chip & Badge 컴포넌트 varient 수정해야함
            <li key={id} className="list-none">
              <Chip
                size="M"
                variant={selectedCapacity === keyword ? 'secondary-pressed' : 'secondary'}
                badge={
                  <Badge variant="gray100-outline" size="S">
                    {addPlusMarkOver99(count)}
                  </Badge>
                }>
                {keyword}
              </Chip>
            </li>
          ))}
        </nav>
        <div>
          {/* TODO: TextButton Svg 색상 처리 필요 */}
          <TextButton size="L" leftIcon={<IconClock className="fill-none" />} onClick={handleTimeSortOnClick}>
            {EXPERIENCE_FILTER_BY_TIME[+filterByTime]}
          </TextButton>
        </div>
      </section>
      <section className="mt-[24px]">
        <ul className="grid grid-cols-3 gap-[16px]">
          {experiences.map(
            ({ id, experienceStatus, summary, startDate, endDate, title, situation, capabilities }: Experience) => (
              <li key={id}>
                <section className="w-[389px] p-[24px] border rounded-[16px] hover:shadow-S4">
                  <div className="relative w-[341px] h-[345px] bg-black rounded-[16px]">
                    {/* 카드 이미지 */}
                    <div className="w-[341px] h-[345px] flex items-center justify-center">
                      {/* 🚨TODO: 키워드별 cardImage */}
                      <Image src={cardImage} alt="경험카드" width={250} height={250} />
                    </div>
                    {/* 상태 */}
                    {experienceStatus === 'INPROGRESS' && (
                      <Badge variant="gray100-outline" size="S" className="absolute top-[16px] left-[16px]">
                        작성중
                      </Badge>
                    )}
                    {/* 액션버튼 */}
                    <ActionList>
                      <ActionList.Button className="absolute top-[16px] right-[16px]">
                        <IconMoreVertical />
                      </ActionList.Button>
                      <ActionList.ItemWrapper>
                        {/* 🚨TODO: 수정 삭제 이벤트 */}
                        <ActionList.Item>수정하기</ActionList.Item>
                        <ActionList.Item onClick={() => console.log('삭제 완')}>삭제하기</ActionList.Item>
                      </ActionList.ItemWrapper>
                    </ActionList>
                    {/* 카드 키워드 */}
                    <div className="flex flex-row gap-[12px] absolute bottom-[16px] left-[16px]">
                      {summary.map((item, index) => (
                        <Tag variant="gray800" size="M" key={`${id}-${index}-${item}`}>
                          {item}
                        </Tag>
                      ))}
                    </div>
                  </div>
                  <div className="mt-[24px] flex flex-col">
                    <span className="b1 mb-[2px]">{getExperiencePeriod(startDate, endDate)}</span>
                    <h5 className="h5 mb-[8px]">{title}</h5>
                    <p className="b2 line-clamp-1">{situation}</p>
                  </div>
                  <div className="border-t-[1px] border-gray-200 my-[16px]"></div>
                  <div>
                    <div>
                      <span className="mb-4 subhead4">직무영략 키워드</span>
                      <div className="flex flex-row flex-wrap gap-x-[4px] gap-y-[2px] mb-[10px]">
                        {capabilities
                          .filter(({ isAi }) => !isAi)
                          .map(({ id: capacityId, keyword }, index) => (
                            <>
                              <Tag key={`${id}-${capacityId}-${Keyword}`} variant="primary50-outline" size="M">
                                {keyword}
                              </Tag>
                              {/* Question: CSS로 요소의 개수만큼 개행 처리를 할 수 있는 방법이 있을까요? */}
                              {index % 2 ? <span className="basis-full" /> : ''}
                            </>
                          ))}
                      </div>
                    </div>
                    <div>
                      <span className="mb-4 subhead4">AI추천 키워드</span>
                      <div className="flex flex-row flex-wrap gap-[4px] mb-[10px]">
                        {capabilities
                          .filter(({ isAi }) => isAi)
                          .map(({ id: capacityId, keyword }) => (
                            <Tag key={`${id}-${capacityId}-${Keyword}`} variant="secondary50-outline" size="M">
                              {keyword}
                            </Tag>
                          ))}
                      </div>
                    </div>
                  </div>
                </section>
              </li>
            )
          )}
        </ul>
      </section>
    </>
  );
};

export default Page;
