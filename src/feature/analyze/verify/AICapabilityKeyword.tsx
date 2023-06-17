import React from 'react';
import Tag from '@/components/Tag/Tag';
import Alert from '@/../public/icons/alert-circle-line.svg';
import { renderRecommendKeyword } from './page';

interface Props {
  recommendKeywordList: string[];
}

const AICapabilityKeyword = ({ recommendKeywordList }: Props) => {
  return (
    <div className="flex flex-col flex-center border-[1px] border-secondary-400 rounded-[16px] bg-secondary-50 px-[22px] py-[32px] ">
      <div className="w-[132px] h-[132px] mb-[7px]">132x132 img or lottie</div>
      <div className="h6 break-keep mb-[16px]">
        잠깐, OOO님! <br />
        직무역량 키워드에 {renderRecommendKeyword(recommendKeywordList)}을 추가해보면 어때요?
      </div>
      <p className="b1 mb-[24px]">
        올때메로나님의 경험을 AI가 분석한 결과 창의력과 협동력 역량을 추천하고 싶어요! 개발자, 기획자를 비롯해 여러
        직군의 사람들과 협동하고, 서비스 출시라는 목표를 이뤄낸 과정에서 아래의 역량이 잘 드러나 추천하고 싶어요.
        자기소개서와 면접 때 해당 역량을 어필해보는건 어떨까요?
      </p>
      <div className="flex gap-[12px] mb-[18px]">
        {recommendKeywordList.map((keyword) => (
          <Tag key={keyword} variant="secondary500" size="L">
            {keyword}
          </Tag>
        ))}
      </div>
      <div className="flex-center">
        <Alert />
        <span className="c1">AI 역량 키워드는 최대 2개까지 추천돼요</span>
      </div>
    </div>
  );
};

export default AICapabilityKeyword;
