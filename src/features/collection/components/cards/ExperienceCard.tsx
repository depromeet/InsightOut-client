'use client';

import Image from 'next/image';
import cardImage from '../../../../../public/images/card1.png';
import Badge from '@/components/Badge/Badge';
import ActionList from '@/components/ActionList/ActionList';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import Tag from '@/components/Tag/Tag';
import { Experience } from '../../types';
import getExperiencePeriod from '../../utils/getExperiencePeriod';
import Modal from '@/components/Modal/Modal';
import { useDisclosure } from '@chakra-ui/react';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalFooter from '@/components/Modal/ModalFooter';
import ExperienceModalCard from './ExperienceModalCard';

type Props = Experience;

const ExperienceCard = ({
  id,
  experienceStatus,
  summaries,
  startDate,
  endDate,
  title,
  situation,
  capabilities,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenExperienceCardModal,
    onOpen: onOpenExperienceCardModal,
    onClose: onCloseExperienceCardModal,
  } = useDisclosure();

  const experiencePeriod = getExperiencePeriod(startDate, endDate);
  return (
    <>
      <section
        className="w-[389px] p-[24px] border border-gray-300 rounded-[24px] hover:border-gray-400 hover:shadow-S4"
        onClick={() => {
          console.log('test');
          onOpenExperienceCardModal();
        }}>
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
              <ActionList.Item onClick={onOpen}>삭제하기</ActionList.Item>
            </ActionList.ItemWrapper>
          </ActionList>
          {/* 카드 키워드 */}
          <div className="flex flex-row gap-[12px] absolute bottom-[16px] left-[16px]">
            {summaries.map((summary, index) => (
              <Tag variant="gray800" size="M" key={`${id}-${index}-${summary}`}>
                {summary}
              </Tag>
            ))}
          </div>
        </div>
        <div className="mt-[24px] flex flex-col">
          <span className="b1 mb-[2px]">{experiencePeriod}</span>
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
                    <Tag key={`${id}-${capacityId}-${keyword}`} variant="primary50-outline" size="M">
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
                  <Tag key={`${id}-${capacityId}-${keyword}`} variant="secondary50-outline" size="M">
                    {keyword}
                  </Tag>
                ))}
            </div>
          </div>
        </div>
      </section>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalHeader.Title
          title={'[경험제목]\n카드를 삭제하실건가요?'}
          subTitle="삭제한 카드는 다시 복구할 수 없어요"
        />
        <ModalFooter.TwoButton
          leftTextContent="취소하기"
          handleLeftClick={onClose}
          rightTextContent="삭제하기"
          handleRightClick={() => {
            console.log('삭제하기');
          }}
        />
      </Modal>
      <ExperienceModalCard
        isOpen={isOpenExperienceCardModal}
        onClose={onCloseExperienceCardModal}
        period={experiencePeriod}
        title={title}
        summaries={summaries}
        capabilities={capabilities}
      />
    </>
  );
};

export default ExperienceCard;
