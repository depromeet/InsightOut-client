/* eslint-disable react/display-name */
'use client';

import Image from 'next/image';
import cardImage from '../../../../../../public/images/card1.png';
import Badge from '@/components/Badge/Badge';
import ActionList from '@/components/ActionList/ActionList';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import Tag from '@/components/Tag/Tag';
import { Capacity, Experience } from '../../../types';
import getExperiencePeriod from '../../../utils/getExperiencePeriod';
import Modal from '@/components/Modal/Modal';
import { Divider, useDisclosure } from '@chakra-ui/react';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalFooter from '@/components/Modal/ModalFooter';
import ExperienceModalCard from '../ExperienceModalCard';
import { Fragment } from 'react';

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
  const {
    isOpen: isOpenActionListModal,
    onOpen: onOpenActionListModal,
    onClose: onCloseActionListModal,
  } = useDisclosure();
  const {
    isOpen: isOpenExperienceCardModal,
    onOpen: onOpenExperienceCardModal,
    onClose: onCloseExperienceCardModal,
  } = useDisclosure();

  const experiencePeriod = getExperiencePeriod(startDate, endDate);
  const userCapabilitis = capabilities.filter(({ isAi }) => !isAi);
  const aiCapabilitis = capabilities.filter(({ isAi }) => isAi);
  return (
    <>
      <section
        className="w-[389px] p-[24px] border border-gray-300 rounded-[24px] hover:border-gray-400 hover:shadow-S4"
        onClick={() => {
          onOpenExperienceCardModal();
        }}>
        <ExperienceCard.Top
          id={id}
          experienceStatus={experienceStatus}
          summaries={summaries}
          onOpenActionListModal={onOpenActionListModal}
        />
        <ExperienceCard.Summary experiencePeriod={experiencePeriod} title={title} situation={situation} />
        <Divider my={'16px'} />
        <div>
          <ExperienceCard.KeyWord id={id} title="직무영략 키워드" capabilities={userCapabilitis} />
          <ExperienceCard.KeyWord id={id} title="AI추천 키워드" capabilities={aiCapabilitis} isAi={true} />
        </div>
      </section>
      <Modal size="md" isOpen={isOpenActionListModal} onClose={onCloseActionListModal}>
        <ModalHeader.Title
          title={'[경험제목]\n카드를 삭제하실건가요?'}
          subTitle="삭제한 카드는 다시 복구할 수 없어요"
        />
        <ModalFooter.TwoButton
          leftTextContent="취소하기"
          handleLeftClick={onCloseActionListModal}
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

type ExperienceCardTopProps = {
  id: number;
  experienceStatus: 'INPROGRESS' | 'DONE';
  onOpenActionListModal: () => void;
  summaries: string[];
};

ExperienceCard.Top = ({ id, experienceStatus, onOpenActionListModal, summaries }: ExperienceCardTopProps) => (
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
      <ActionList.Button
        className="absolute top-[16px] right-[16px]"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}>
        <IconMoreVertical />
      </ActionList.Button>
      <ActionList.ItemWrapper>
        {/* 🚨TODO: 수정 삭제 이벤트 */}
        <ActionList.Item>수정하기</ActionList.Item>
        <ActionList.Item onClick={onOpenActionListModal}>삭제하기</ActionList.Item>
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
);

type ExperienceCardMidProps = {
  experiencePeriod: string;
  title: string;
  situation?: string;
};

ExperienceCard.Summary = ({ experiencePeriod, title, situation }: ExperienceCardMidProps) => (
  <div className="mt-[24px] flex flex-col">
    <span className="b1 mb-[2px]">{experiencePeriod}</span>
    <h5 className="h5 mb-[8px]">{title}</h5>
    <p className="b2 line-clamp-1">{situation}</p>
  </div>
);

type ExperienceCardKeyWordProps = {
  id: number;
  title: string;
  capabilities: Omit<Capacity, 'count'>[];
  isAi?: boolean;
};

ExperienceCard.KeyWord = ({ id, title, capabilities, isAi = false }: ExperienceCardKeyWordProps) => (
  <div className={`${isAi ? 'h-[66px]' : 'h-[104px] gap-y-[2px]'}`}>
    <span className="mb-4 subhead4">{title}</span>
    <div className={`flex flex-row flex-wrap gap-x-[4px] mb-[10px] ${isAi || 'gap-y-[2px]'}`}>
      {capabilities.map(({ id: capacityId, keyword }, index) => (
        <Fragment key={`${id}-${title}-${capacityId}-${keyword}`}>
          <Tag variant={isAi ? 'secondary50-outline' : 'primary50-outline'} size="M">
            {keyword}
          </Tag>
          {/* Question: CSS로 요소의 개수만큼 개행 처리를 할 수 있는 방법이 있을까요? */}
          {index % 2 ? <span className="basis-full" /> : ''}
        </Fragment>
      ))}
    </div>
  </div>
);

export default ExperienceCard;
