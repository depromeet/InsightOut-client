/* eslint-disable react/display-name */
'use client';

import { Fragment } from 'react';

import { Divider, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

import ActionList from '@/components/ActionList/ActionList';
import Badge from '@/components/Badge/Badge';
import IconMoreVertical from '@/components/Icon/IconMoreVertical';
import Modal from '@/components/Modal/Modal';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import Tag from '@/components/Tag/Tag';
import { MESSAGE } from '@/features/collection/constants';
import { useDeleteExperience } from '@/hooks/reactQuery/experience/mutation';
import { EXPERIENCE_LIST_CARD_MESSAGE } from '@/shared/constants/messages';
import { ROUTES } from '@/shared/constants/routes';
import { useExperienceId } from '@/shared/store/experienceId';

import { Experience, ExperienceStatus } from '../../../types';
import getExperiencePeriod from '../../../utils/getExperiencePeriod';
import CapabilityImage from '../CapabilityImage';
import ExperienceModal from '../ExperienceCard/ExperienceModal';

type Props = Experience;

const ExperienceListCard = ({
  id,
  title,
  situation,
  experienceStatus,
  summaryKeywords,
  startDate,
  endDate,
  experienceCapabilityKeywords,
  aiRecommendKeywords,
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

  const { push } = useRouter();
  const { setExperienceId } = useExperienceId();
  const handleEditButtonClick = () => {
    setExperienceId(id);
    push(ROUTES.EXPERIENCE);
  };

  const { mutate: deleteExperience } = useDeleteExperience(id, {
    onSuccess: () => onCloseActionListModal(),
  });

  const onDeleteButtonClick = () => {
    deleteExperience();
  };

  const experiencePeriod = startDate && endDate ? getExperiencePeriod(startDate, endDate) : MESSAGE.NOT_HAS_PERIOD;

  return (
    <>
      <section
        className="w-[389px] p-[24px] border border-gray-300 rounded-[24px] hover:border-gray-400 hover:shadow-S4"
        onClick={() => {
          onOpenExperienceCardModal();
        }}>
        <ExperienceListCard.Top
          id={id}
          keyword={experienceCapabilityKeywords ? experienceCapabilityKeywords[0] : ''}
          experienceStatus={experienceStatus}
          summaryKeywords={summaryKeywords}
          onOpenActionListModal={onOpenActionListModal}
          onEditButtonClick={handleEditButtonClick}
        />
        <ExperienceListCard.Summary
          experiencePeriod={experiencePeriod}
          title={title || MESSAGE.NOT_HAS_TITLE}
          situation={situation || ''}
        />
        <Divider my={'16px'} />
        <div>
          <ExperienceListCard.Keyword
            id={id}
            title="직무역량 키워드"
            capabilities={
              experienceCapabilityKeywords && experienceCapabilityKeywords?.length > 0
                ? experienceCapabilityKeywords
                : MESSAGE.NOT_HAS_CAPACITY_KEYWORDS
            }
          />
          <ExperienceListCard.Keyword
            id={id}
            title="AI추천 키워드"
            capabilities={
              aiRecommendKeywords && aiRecommendKeywords?.length > 0
                ? aiRecommendKeywords
                : MESSAGE.NOT_HAS_AI_RECOMMEND_KEYWORDS
            }
            isAi={true}
          />
        </div>
      </section>
      <Modal size="md" isOpen={isOpenActionListModal} onClose={onCloseActionListModal}>
        <ModalHeader.Title
          title={MESSAGE.DELETE_EXPERIENCE_CARD_TITLE}
          subTitle={MESSAGE.DELETE_EXPERIENCE_CARD_SUBTITLE}
        />
        <ModalFooter.TwoButton
          leftTextContent="취소하기"
          handleLeftClick={onCloseActionListModal}
          rightTextContent="삭제하기"
          handleRightClick={onDeleteButtonClick}
        />
      </Modal>
      <ExperienceModal isOpen={isOpenExperienceCardModal} onClose={onCloseExperienceCardModal} experienceId={id} />
    </>
  );
};

type ExperienceListCardTopProps = {
  id: number;
  experienceStatus: ExperienceStatus;
  onOpenActionListModal: () => void;
  summaryKeywords?: string[];
  keyword: string;
  onEditButtonClick: () => void;
};

ExperienceListCard.Top = ({
  id,
  experienceStatus,
  onOpenActionListModal,
  summaryKeywords,
  keyword,
  onEditButtonClick,
}: ExperienceListCardTopProps) => {
  const handleActionListClick = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => e.stopPropagation();

  return (
    <div className="relative w-[341px] h-[345px] bg-black rounded-[16px]">
      {/* 카드 이미지 */}
      <div className="w-[341px] h-[345px] flex items-center justify-center">
        <CapabilityImage keyword={keyword} experienceStatus={experienceStatus} width={250} height={250} />
      </div>
      {/* 상태 */}
      {experienceStatus === 'INPROGRESS' && (
        <Badge variant="gray100-outline" size="S" className="absolute top-[16px] left-[16px]">
          작성중
        </Badge>
      )}
      {/* 액션버튼 */}
      <ActionList>
        <ActionList.Button className="absolute top-[16px] right-[16px]" onClick={handleActionListClick}>
          <IconMoreVertical />
        </ActionList.Button>
        <ActionList.ItemWrapper onClick={handleActionListClick}>
          <ActionList.Item onClick={onEditButtonClick}>수정하기</ActionList.Item>
          <ActionList.Item onClick={onOpenActionListModal}>삭제하기</ActionList.Item>
        </ActionList.ItemWrapper>
      </ActionList>
      {/* 카드 키워드 */}
      <div className="flex flex-row gap-[12px] absolute bottom-[16px] left-[16px]">
        {summaryKeywords
          ? summaryKeywords.map((summary, index) => (
              <Tag variant="gray800" size="M" key={`${id}-${index}-${summary}`}>
                {summary}
              </Tag>
            ))
          : ''}
      </div>
    </div>
  );
};

type ExperienceListCardMidProps = {
  experiencePeriod: string;
  title: string;
  situation?: string;
};

ExperienceListCard.Summary = ({ experiencePeriod, title, situation }: ExperienceListCardMidProps) => {
  const renderedSituation = situation || EXPERIENCE_LIST_CARD_MESSAGE.NO_SITUATION;
  return (
    <div className="mt-[24px] flex flex-col">
      <span className="b1 mb-[2px]">{experiencePeriod}</span>
      <h5 className="h5 mb-[8px]">{title}</h5>
      <p className="b2 line-clamp-1">{renderedSituation}</p>
    </div>
  );
};

type ExperienceListCardKeyWordProps = {
  id: number;
  title: string;
  capabilities?: string[];
  isAi?: boolean;
};

ExperienceListCard.Keyword = ({ id, title, capabilities, isAi = false }: ExperienceListCardKeyWordProps) => (
  <div className={`${isAi ? 'h-[66px]' : 'h-[104px] gap-y-[2px] mb-[16px]'}`}>
    <span className="mb-16 subhead4">{title}</span>
    <div className={`flex flex-row flex-wrap gap-x-[4px] mb-[10px] ${isAi || 'gap-y-[2px]'}`}>
      {capabilities
        ? capabilities.map((capability, index) => (
            <Fragment key={`${id}-${title}-${capability}`}>
              <Tag variant={isAi ? 'secondary50-outline' : 'primary50-outline'} size="M">
                {capability}
              </Tag>
              {/* Question: CSS로 요소의 개수만큼 개행 처리를 할 수 있는 방법이 있을까요? */}
              {index % 2 ? <span className="basis-full" /> : ''}
            </Fragment>
          ))
        : ''}
    </div>
  </div>
);

export default ExperienceListCard;
