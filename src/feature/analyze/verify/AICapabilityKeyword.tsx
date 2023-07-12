import React from 'react';

import Image from 'next/image';
import AIFlight from 'public/images/ai-flight.png';

import AlertCircleLine from '@/components/Icon/AlertCircleLine';
import Tag from '@/components/Tag/Tag';
import { useUserNickname } from '@/shared/store/user';

import { CapabilitiesType } from '../types';
import RecommendKeyword from './RecommendKeyword';

interface Props {
  recommendKeywordList: CapabilitiesType[];
}

const AICapabilityKeyword = ({ recommendKeywordList }: Props) => {
  const username = useUserNickname();
  return (
    <div className="flex flex-col flex-center border-[1px] border-secondary-400 rounded-[16px] bg-secondary-50 px-[22px] py-[32px] ">
      <div className="relative w-[132px] h-[132px] border-[1px] border-secondary-300 bg-white rounded-[50%] mb-[7px]">
        <Image src={AIFlight} alt="lumos-flight" fill />
      </div>
      <div className="h6 break-keep mb-[16px]">
        잠깐, {username}님! <br />
        직무역량 키워드에 <RecommendKeyword keywordList={recommendKeywordList} />을 추가해보면 어때요?
      </div>
      <p className="b1 mb-[24px] break-keep">
        AI가 경험 분석한 결과 2가지 역량을 추천하고 싶어요!
        <br /> 앞에서 선택한 직무역량 키워드 외에도 {username}님의 경험에 아래의 역량이 잘 드러나 제안하고 싶어요.
        자기소개서 작성과 면접 때 <RecommendKeyword keywordList={recommendKeywordList} />를 어필해보는건 어때요?
      </p>
      <div className="flex gap-[12px] mb-[18px]">
        {recommendKeywordList
          .map(({ keyword }) => (
            <Tag key={keyword} variant="secondary500" size="L">
              {keyword}
            </Tag>
          ))
          .slice(0, 2)}
      </div>
      <div className="flex-center">
        <AlertCircleLine />
        <span className="c1">AI 역량 키워드는 최대 2개까지 추천돼요</span>
      </div>
    </div>
  );
};

export default AICapabilityKeyword;
