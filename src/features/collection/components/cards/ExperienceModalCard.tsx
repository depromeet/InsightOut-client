'use client';

import Button from '@/components/Button/Button';
import Tag from '@/components/Tag/Tag';
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import Image from 'next/image';
import { Capacity } from '../../types';
import cardImage from '../../../../../public/images/card1.png';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  // Todo: Data
  period: string;
  title: string;
  summaries: string[];
  capabilities: Omit<Capacity, 'count'>[];
};

const ExperienceModalCard = (props: Props) => {
  const { isOpen, onClose, period, title, summaries, capabilities } = props;

  const userCapabilitis = capabilities.filter(({ isAi }) => !isAi);
  const aiCapabilitis = capabilities.filter(({ isAi }) => isAi);

  const aiRecommend =
    '디자이너로서 개발팀과 각각의 전문성을 최대한 활용하여 높은 퀄리티의 앱을 만들어내기 위해 커뮤니케이션 능력을 뽐내셨군요! 빠른 기간안에 앱 서비스를 런칭해야하는 상황에서 디자인 시스템 제작, 런칭일 정해서 린하게 개발하는 방법을 제의한 것은 프로젝트 관리 능력의 일환이었습니다.';

  const aiRecommendQuestions = [
    {
      id: 10,
      question:
        'Q. 본인이 팀 프로젝트에서 어려운 의견 충돌 상황을 어떻게 관리했고, 해결책을 도출하는 과정을 설명해주세요.',
    },
    {
      id: 11,
      question:
        'Q. 본인이 팀 프로젝트에서 어려운 의견 충돌 상황을 어떻게 관리했고, 해결책을 도출하는 과정을 설명해주세요.',
    },
    {
      id: 12,
      question: 'Q. 본인이 고객과의 원활한 커뮤니케이션을 통해 성과를 이뤄낸 경험에 대해 알려주세요.',
    },
  ];

  return (
    <Modal size="experienceModalCard" isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent p={0}>
        <ModalHeader className="w-full bg-gray-50 rounded-t-[32px]" p={[50, 42, 40, 30]} m={0}>
          <div className="flex flex-row justify-between mb-[12px]">
            <span>{period}</span>
            <Button variant="gray900" size="M">
              카드 뒷면보기
            </Button>
          </div>
          <h3 className="text-left h3">{title}</h3>
        </ModalHeader>
        <ModalBody className="flex flex-row justify-between w-full" p={50} m={0}>
          {/* Main left */}
          <div className="w-[560px]">
            <div className="relative bg-black rounded-[24px] w-[480px] h-[616px]">
              <div className="w-[480px] h-[616px] flex items-center justify-center">
                <Image src={cardImage} alt="경험카드" width={432} height={453} />
                <div className="absolute flex flex-col bottom-[24px] left-[24px]">
                  <span className="text-left text-white b4 mb-[6px]">경험요약</span>
                  <ul className="flex flex-row gap-[8px]">
                    {summaries.map((summary, index) => (
                      <li key={`ExperienceCardModal-${index}-${summary}`}>
                        <Tag variant="gray800" size="L">
                          {summary}
                        </Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Main right */}
          <div className="w-[589px] flex flex-col text-left px-[40px]">
            <div className="mb-[22px]">
              <h6 className="h6 mb-[16px]">내가 선택한 역량 키워드</h6>
              <ul className="flex flex-row flex-wrap gap-x-[8px] gap-y-[4px]">
                {userCapabilitis.map(({ keyword, id }, index) => (
                  <li key={`${id}-${index}-${keyword}`}>
                    <Tag variant="primary50-outline" size="L">
                      {keyword}
                    </Tag>
                    {index % 2 ? <span className="basis-full" /> : ''}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-[22px]">
              <h6 className="h6 mb-[16px]">AI 역량 분석</h6>
              <ul className="mb-[16px]">
                {aiCapabilitis.map(({ keyword, id }, index) => (
                  <li key={`${id}-${index}-${keyword}`}>
                    <Tag variant="secondary50-outline" size="L">
                      {keyword}
                    </Tag>
                  </li>
                ))}
              </ul>
              <p className="w-full h-fit">{aiRecommend}</p>
            </div>
            <div>
              <h6 className="h6 mb-[8px]">이 경험과 잘 맞는 자기소개서 문항</h6>
              <ul className="flex flex-col gap-[8px]">
                {aiRecommendQuestions.map(({ id, question }) => (
                  <li
                    key={`${id}-${question}`}
                    className=" border-[1px] rounded-[8px] border-gray-300 py-[8px] px-[16px]">
                    <p className="w-full">{question}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ExperienceModalCard;
