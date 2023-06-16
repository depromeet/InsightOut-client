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

const Page = () => {
  const EXPERIENCE_FILTER_BY_TIME = ['경험시간순', '작성시간순'];
  const capabilities = [
    {
      id: 123,
      keyword: '팀워크',
      count: 4,
    },
    {
      id: 124,
      keyword: '리더십',
      count: 100,
    },
    {
      id: 125,
      keyword: '분석능력',
      count: 5,
    },
    {
      id: 126,
      keyword: '설득력',
      count: 7,
    },
    {
      id: 127,
      keyword: '책임감',
      count: 13,
    },
  ];

  const [filterByTime, setFilterByTime] = useState(false);
  const [selectedCapacity, setselectedCapacity] = useState(capabilities[0]);

  const experiences = [
    {
      id: 1,
      keyword: '00직무 디자인 인턴',
      startDate: '2022-01',
      endDate: '2022-07',
      experienceStatus: 'INPROGRESS or DONE',
      situation: '개발자와 협업 역량을 쌓기 위해 IT 동아리에 들어감',
      task: '개발 시간이 짧아서 빠른 기간 내에 런칭을 완료해야 했음',
      action: '디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법 제의',
      result: '4개월만에 출시를 성공하게 됨',
      experienceInfo: {
        experienceInfoId: 1,
        experienceId: 1,
        motivation: '개발자와 협업 역량을 기르기 위해 하게 됨',
        experienceRole: 'UI/UX 디자이너',
        utilization: '역량 활용',
        analysis: 'AI 분석',
      },
    },
  ];

  const handleTimeSortOnClick = () => {
    setFilterByTime((filterByTime) => !filterByTime);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center my-[24px]">
        <section className="flex flex-row gap-[8px]">
          {capabilities.map(({ id, keyword, count }) => (
            // TODO: Chip & Badge 컴포넌트 varient 수정해야함
            <li key={id} className="list-none">
              <Chip
                size="M"
                variant={selectedCapacity.keyword === keyword ? 'secondary-pressed' : 'secondary'}
                badge={
                  <Badge varient="gray100-outline" size="S">
                    {addPlusMarkOver99(count)}
                  </Badge>
                }>
                {keyword}
              </Chip>
            </li>
          ))}
        </section>
        <section>
          {/* TODO: TextButton Svg 색상 처리 필요 */}
          <TextButton size="L" leftIcon={<IconClock className="fill-none" />} onClick={handleTimeSortOnClick}>
            {EXPERIENCE_FILTER_BY_TIME[+filterByTime]}
          </TextButton>
        </section>
      </div>
      <div className="mt-[24px]">
        <ul>
          <li>
            <section className="w-[389px] p-[24px] border rounded-[16px]">
              <div className="relative w-[341px] h-[345px] bg-black rounded-[16px]">
                {/* 카드 이미지 */}
                <div className="w-[341px] h-[345px] flex items-center justify-center">
                  <Image src={cardImage} alt="경험카드" width={250} height={250} />
                </div>
                {/* 상태 */}
                <Badge varient="gray100-outline" size="S" className="absolute top-[16px] left-[16px]">
                  작성중
                </Badge>
                {/* 액션버튼 */}
                <ActionList>
                  <ActionList.Button className="absolute top-[16px] right-[16px]">
                    <IconMoreVertical />
                  </ActionList.Button>
                  <ActionList.ItemWrapper>
                    <ActionList.Item>수정하기</ActionList.Item>
                    <ActionList.Item onClick={() => console.log('삭제 완')}>삭제하기</ActionList.Item>
                  </ActionList.ItemWrapper>
                </ActionList>
                {/* 카드 키워드 */}
                <div className="flex flex-row gap-[12px] absolute bottom-[16px] left-[16px]">
                  <Tag variant="gray800" size="M">
                    협동력
                  </Tag>
                  <Tag variant="gray800" size="M">
                    상상력
                  </Tag>
                </div>
              </div>
              <div className="mt-[24px] flex flex-col">
                <span className="b1 mb-[2px]">2023.04 - 2023.08</span>
                <h5 className="h5 mb-[8px]">일이삼사오육칠팔구십일이삼사</h5>
                <p className="b2">
                  텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세...
                </p>
              </div>
              <div className="border-t-[1px] border-gray-200 my-[16px]"></div>
              <div>
                <div>
                  <span className="mb-4 subhead4">직무영략 키워드</span>
                  <div className="grid grid-cols-2 grid-rows-2 gap-[4px] mb-[10px]">
                    <Tag variant="primary50-outline" size="M">
                      일이삼사오육칠팔구십
                    </Tag>
                    <Tag variant="primary50-outline" size="M">
                      일이삼사오육칠팔구십
                    </Tag>
                    <Tag variant="primary50-outline" size="M">
                      일이삼사오육칠팔구십
                    </Tag>
                  </div>
                </div>
                <div>
                  <span className="mb-4 subhead4">AI추천 키워드</span>
                  <div className="grid grid-cols-2 grid-rows-1 gap-[4px] mb-[10px]">
                    <Tag variant="secondary50-outline" size="M">
                      일이삼사오육칠팔구십
                    </Tag>
                    <Tag variant="secondary50-outline" size="M">
                      일이삼사오육칠팔구십
                    </Tag>
                  </div>
                </div>
              </div>
            </section>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page;
