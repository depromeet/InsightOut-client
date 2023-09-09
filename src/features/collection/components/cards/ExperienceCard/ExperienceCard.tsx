/* eslint-disable react/display-name */
'use client';

import { useState } from 'react';

import Image from 'next/image';
import AIKeywordRecommend from 'public/images/ai-keyword-recommend.png';

import Badge from '@/components/Badge/Badge';
import Button from '@/components/Button/Button';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import Tag from '@/components/Tag/Tag';
import { ExperienceStatus } from '@/features/analyze/types';
import { AiRecommendQuestions, ExperienceInfo } from '@/features/collection/types';
import { MAX_LENGTH } from '@/shared/constants/maxLength';
import { EXPERIENCE_LIST_CARD_MESSAGE } from '@/shared/constants/messages';
import { useUserNickname } from '@/shared/store/user';

import CapabilityImage from '../CapabilityImage';
import MotionBox from '../MotionBox';

type Props = {
  period: string;
  title: string;
  experienceStatus: ExperienceStatus;
  summaryKeywords?: string[];
  experienceCapabilityKeywords?: string[];
  aiRecommendKeywords?: string[];
  experienceInfo?: ExperienceInfo;
  star?: string;
  aiResume?: string;
  aiRecommendQuestions?: AiRecommendQuestions[];
};

const ExperienceCard = ({
  period,
  title,
  summaryKeywords,
  experienceCapabilityKeywords,
  aiRecommendKeywords,
  experienceStatus,
  experienceInfo,
  star,
  aiResume,
  aiRecommendQuestions,
}: Props) => {
  const username = useUserNickname();

  console.log(username);
  const [isBack, setIsBack] = useState(false);

  const handleFlipClick = () => {
    setIsBack((isBack) => !isBack);
  };

  const cardFlippingVariants = {
    flipInitial: {
      rotateY: 0,
      transition: { duration: 0.5 },
    },
    flipEnd: {
      rotateY: 180,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="flex flex-col justify-start w-[1149px] h-[936px] p-0 [perspective:1000px]">
      <MotionBox
        h={'full'}
        variants={cardFlippingVariants}
        animate={!isBack ? 'flipInitial' : 'flipEnd'}
        bg={'white'}
        rounded={32}>
        <ExperienceCard.Header
          title={title || EXPERIENCE_LIST_CARD_MESSAGE.NOT_HAS_TITLE}
          period={period}
          isBack={isBack}
          handleFlipClick={handleFlipClick}
        />
        <div
          className={`flex flex-row justify-between w-full overflow-auto h-[720px] m-0 p-[50px] ${
            isBack && '[transform:rotateY(180deg)] py-[20px] px-[40px]'
          }`}>
          {!isBack ? (
            <ExperienceCard.BodyFront
              summaries={summaryKeywords}
              experienceStatus={experienceStatus}
              aiRecommend={experienceInfo?.analysis}
              experienceCapabilityKeywords={
                experienceCapabilityKeywords && experienceCapabilityKeywords.length
                  ? experienceCapabilityKeywords
                  : EXPERIENCE_LIST_CARD_MESSAGE.NOT_HAS_CAPACITY_KEYWORDS
              }
              aiRecommendKeywords={
                aiRecommendKeywords && aiRecommendKeywords.length
                  ? aiRecommendKeywords
                  : EXPERIENCE_LIST_CARD_MESSAGE.NOT_HAS_AI_RECOMMEND_KEYWORDS
              }
              aiRecommendQuestions={aiRecommendQuestions}
            />
          ) : (
            <ExperienceCard.BodyBack
              username={username}
              title={title}
              experienceCapabilityKeywords={experienceCapabilityKeywords}
              aiRecommendKeywords={aiRecommendKeywords}
              experienceInfo={experienceInfo}
              star={star}
              aiResume={aiResume}
            />
          )}
        </div>
      </MotionBox>
    </section>
  );
};

type ExperienceCardHeaderProps = {
  title: string;
  period: string;
  isBack: boolean;
  handleFlipClick: () => void;
};

ExperienceCard.Header = ({ title, period, isBack, handleFlipClick }: ExperienceCardHeaderProps) => (
  <header
    className={`w-full rounded-t-[32px] m-0 pt-[42px] pl-[50px] pr-[40px] pb-[30px] ${
      !isBack ? 'bg-gray-50' : '[transform:rotateY(180deg)]'
    }`}>
    <div className="flex flex-row justify-between mb-[12px]">
      <span>{period}</span>
      <Button variant="gray900" size="M" onClick={handleFlipClick}>
        {!isBack ? '작성내용 확인하기' : '앞면으로 돌아가기'}
      </Button>
    </div>
    <h3 className="text-left h3">{title}</h3>
  </header>
);

type ExperienceCardBodyFrontProps = {
  summaries?: string[];
  experienceStatus: ExperienceStatus;
  experienceCapabilityKeywords?: string[];
  aiRecommendKeywords?: string[];
  aiRecommend?: string;
  aiRecommendQuestions?: AiRecommendQuestions[];
};

ExperienceCard.BodyFront = ({
  summaries,
  experienceStatus,
  experienceCapabilityKeywords,
  aiRecommendKeywords,
  aiRecommend,
  aiRecommendQuestions,
}: ExperienceCardBodyFrontProps) => {
  return (
    <>
      <div className="w-[560px]">
        <ExperienceCard.Image
          summaries={summaries}
          experienceStatus={experienceStatus}
          keyword={experienceCapabilityKeywords ? experienceCapabilityKeywords[0] : ''}
        />
      </div>
      <div className="w-[589px] flex flex-col text-left px-[40px]">
        <ExperienceCard.Keyword title="내가 선택한 역량 키워드" capabilities={experienceCapabilityKeywords} />
        <ExperienceCard.Keyword
          title="AI 역량 분석"
          capabilities={aiRecommendKeywords}
          isAi={true}
          aiRecommend={aiRecommend}
        />
        <ExperienceCard.AIQuestions aiRecommendQuestions={aiRecommendQuestions} />
      </div>
    </>
  );
};

type ExperienceCardImageProps = {
  summaries?: string[];
  keyword: string;
  experienceStatus: ExperienceStatus;
};

ExperienceCard.Image = ({ summaries, keyword, experienceStatus }: ExperienceCardImageProps) => (
  <div className="relative bg-black rounded-[24px] w-[480px] h-[616px]">
    <div className="w-[480px] h-[616px] flex items-center justify-center">
      <CapabilityImage keyword={keyword} experienceStatus={experienceStatus} width={432} height={453} />
      {experienceStatus === 'INPROGRESS' && (
        <Badge variant="gray100-outline" size="M" className="absolute top-[24px] left-[24px]">
          작성중
        </Badge>
      )}
      <div className="absolute flex flex-col bottom-[24px] left-[24px]">
        {summaries?.length ? (
          <>
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
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  </div>
);

type ExperienceKeywordProps = {
  title: string;
  capabilities?: string[];
  isAi?: boolean;
  aiRecommend?: string;
};

ExperienceCard.Keyword = ({ title, capabilities, aiRecommend, isAi = false }: ExperienceKeywordProps) => (
  <div className="mb-[22px]">
    <h6 className="h6 mb-[16px]">{title}</h6>
    <ul className={`flex flex-row flex-wrap gap-x-[8px] gap-y-[4px] ${isAi ? 'mb-[16px]' : 'h-[96px]'}`}>
      {capabilities
        ? capabilities.map((capability, index) => (
            <li key={`${'EXPERIENCE_CARD'}-${index}-${capability}`}>
              <Tag variant={`${isAi ? 'secondary50-outline' : 'primary50-outline'}`} size="L">
                {capability}
              </Tag>
              {isAi ? index % 2 ? <span className="basis-full" /> : '' : ''}
            </li>
          ))
        : ''}
    </ul>
    {aiRecommend ? <p className="w-full h-fit">{aiRecommend}</p> : ''}
  </div>
);

type ExperienceCardAIQuestionsProps = {
  aiRecommendQuestions?: AiRecommendQuestions[];
};

ExperienceCard.AIQuestions = ({ aiRecommendQuestions }: ExperienceCardAIQuestionsProps) => (
  <div>
    <h6 className="h6 mb-[8px]">이 경험과 잘 맞는 자기소개서 문항</h6>
    {aiRecommendQuestions?.length ? (
      <ul className="flex flex-col gap-[8px]">
        {aiRecommendQuestions?.map(({ id, createedAt, title }) => (
          <li key={`${id}-${createedAt}`} className=" border-[1px] rounded-[8px] border-gray-300 py-[8px] px-[16px]">
            <p className="w-full">{title}</p>
          </li>
        ))}
      </ul>
    ) : (
      <div className=" border-[1px] rounded-[8px] border-gray-300 py-[8px] px-[16px]">
        {EXPERIENCE_LIST_CARD_MESSAGE.NOT_HAS_AI_RECOMMEND_QUESTIONS}
      </div>
    )}
  </div>
);

type ExperienceBodyBackProps = Pick<
  Props,
  'title' | 'experienceCapabilityKeywords' | 'aiRecommendKeywords' | 'experienceInfo' | 'star' | 'aiResume'
> & {
  username: string;
};

ExperienceCard.BodyBack = ({
  username,
  title,
  experienceCapabilityKeywords,
  aiRecommendKeywords,
  experienceInfo,
  star,
  aiResume,
}: ExperienceBodyBackProps) => {
  return (
    <div className="h-full">
      <div className="flex flex-col w-[690px] text-left">
        <div className="mb-[20px]">
          <TextAreaField chipTitle="나의 역할" maxLength={20} readOnly value={experienceInfo?.experienceRole} />
        </div>
        <div className="mb-[20px]">
          <TextAreaField chipTitle="경험 수행 이유" maxLength={100} readOnly value={experienceInfo?.motivation} />
        </div>
        <div className="mb-[20px]">
          <div className="mb-[8px]">
            <Tag variant="gray100" size="S">
              내가 선택한 경험 역량 키워드
            </Tag>
          </div>
          <ul className="flex flex-row gap-[8px]">
            {experienceCapabilityKeywords
              ? experienceCapabilityKeywords.map((keyword, index) => (
                  <li key={`back-capability-${keyword}-${index}`}>
                    <Tag variant="primary500" size="M">
                      {keyword}
                    </Tag>
                  </li>
                ))
              : ''}
          </ul>
        </div>
        <div className="mb-[20px]">
          <TextAreaField chipTitle={`${username}님의 ${title}`} maxLength={100} readOnly autoSize value={star} />
        </div>
        <section className="flex flex-col gap-[20px]">
          <h2 className="subhead2 flex items-center gap-[4px]">
            <Image src={AIKeywordRecommend} alt="ai keyword recommend icon" />
            AI 직무역량 추천
          </h2>
          <div>
            <div className="mb-[8px]">
              <Tag variant="gray100" size="S">
                AI 직무역량 키워드
              </Tag>
            </div>
            <ul className="flex flex-row gap-[8px]">
              {aiRecommendKeywords
                ? aiRecommendKeywords.map((keyword, index) => (
                    <li key={`back-capability-${keyword}-${index}`}>
                      <Tag variant="secondary50-outline" size="M">
                        {keyword}
                      </Tag>
                    </li>
                  ))
                : ''}
            </ul>
          </div>
          <TextAreaField
            chipTitle="AI 자기소개서 예시"
            maxLength={MAX_LENGTH.AI_RESUME}
            readOnly
            autoSize
            value={aiResume}
          />
        </section>
      </div>
    </div>
  );
};

export default ExperienceCard;
