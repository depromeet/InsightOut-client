'use client';

import React from 'react';
import QuestionCard from '@/components/QuestionCard/QuestionCard';
import TextAreaField from '@/components/Input/TextAreaField/TextAreaField';
import SelectedKeywordContainer from '@/feature/analyze/verify/SelectedKeywordContainer';
import Tag from '@/components/Tag/Tag';
import AICapabilityKeyword from '@/feature/analyze/verify/AICapabilityKeyword';

const keywordList = ['도전정신', '추진력', '혁신사고력'];

const recommendKeywordList = ['창의력', '협동력'];

export const renderRecommendKeyword = (arr: string[]) => {
  if (arr.length === 1) return <span className="text-secondary-500">{arr[0]}</span>;
  return (
    <span>
      <span className="text-secondary-500">{arr[0]}</span>과&nbsp;
      <span className="text-secondary-500">{arr[1]}</span>
    </span>
  );
};

const VerifyPage = () => {
  return (
    <>
      <QuestionCard title={<AICapabilityKeyword recommendKeywordList={recommendKeywordList} />}>
        <>
          <TextAreaField
            readOnly
            autoSize
            rows={10}
            placeholder="ex.개발 기간이 짧아서 빠른 기간 내 런칭을 완료해야 했음"
            chipTitle="OOO님의 IT동아리 협업"
            maxLength={400}
            value={`텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요 
            텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요
            텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요텍스트를입력해주세요
            `}
          />
          <SelectedKeywordContainer>
            {keywordList.map((keyword) => (
              <Tag key={keyword} variant="primary50-outline" size="L">
                {keyword}
              </Tag>
            ))}
          </SelectedKeywordContainer>
        </>
      </QuestionCard>
      <QuestionCard
        title={
          <div className="h6">
            {renderRecommendKeyword(recommendKeywordList)}을 활용해
            <br />
            이렇게 자기소개서를 써보는건 어떨까요?
          </div>
        }
        subTitle="AI 자기소개서는 상단의 모아보기 탭에서 다시 확인할 수 있어요">
        <TextAreaField
          readOnly
          autoSize
          rows={10}
          placeholder="ex.개발 기간이 짧아서 빠른 기간 내 런칭을 완료해야 했음"
          chipTitle="AI 추천 자기소개서 예시"
          maxLength={700}
          value={`저는 UX 디자인 직무에 지원하려는 [이름]입니다. 창의력과 협동력을 바탕으로 사람들의 사용자 경험을 
개선하는 일에 열정을 갖고 있습니다. [학력/경력] IT 동아리에서의 경험을 통해 앱 서비스를 출시하는 과정에 참여하였습니다. 이를 통해 사용자들의 니즈를 파악하고, 사용자 중심의 디자인 접근 방법을 익히는 기회를 가졌습니다. 이 경험을 통해 UX 디자인의 중요성과 영향력을 깨닫게 되었습니다.

창의력은 문제 해결과 혁신적인 아이디어를 도출하는 능력입니다. 다양한 관점에서 사용자의 니즈를 파악하고, 새로운 디자인 솔루션을 제시하는 데에 주력하였습니다. 이를 통해 사용자들의 경험을 향상시킬 수 있는 독특하고 창의적인 아이디어를 개발하였습니다. 
또한, 협동력은 효과적인 팀워크와 의사 소통을 통해 목표 달성을 이루는 능력입니다. 동아리에서 팀원들과 긴밀하게 협력하여 프로젝트를 성공적으로 마무리하였습니다. 상호작용을 통해 팀의 목표를 이루고, 팀원들의 의견을 수렴하며 적극적으로 피드백을 주고받는 과정에서 협동력을 발휘하였습니다.

저는 사용자의 니즈를 이해하고, 창의적인 디자인 아이디어를 통해 사용자 경험을 개선하는 UX 디자인 직무에 대한 역량을 갖추고 있습니다. 저의 열정과 노력으로 팀과 함께 일하며 더 나은 사용자 경험을 만들어내고 싶습니다.`}
        />
      </QuestionCard>
    </>
  );
};

export default VerifyPage;
