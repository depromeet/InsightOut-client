'use client';

import { useState } from 'react';

import Chip from '@/components/Chip/Chip';
import AiRecommendResumeListCard from '@/features/collection/components/cards/AiRecommendResumeCard';
import { useGetAiResumes } from '@/hooks/reactQuery/ai/query';

const Page = () => {
  const { data } = useGetAiResumes();

  const aiRecommendKeyword = data?.availableKeywords || [];
  const aiRecommend = data?.AiResumes || [];

  const initialAiRecommenedKeyword = aiRecommendKeyword[0];

  const [selectedAiRecommend, setSelectedAiRecommend] = useState(initialAiRecommenedKeyword);

  const shownAiResumes = aiRecommend.filter(({ AiCapabilities }) => AiCapabilities.includes(selectedAiRecommend));

  return (
    <div>
      <nav className="flex flex-row items-center gap-[8px] h-[54px] overflow-x-auto whitespace-nowrap scrollbar-hide">
        {aiRecommendKeyword.map((keyword, index) => (
          <li key={`${index}-${keyword}`} className="list-none">
            <Chip
              size="M"
              variant={selectedAiRecommend === keyword ? 'secondary-pressed' : 'secondary'}
              onClick={() => setSelectedAiRecommend(keyword)}>
              {keyword}
            </Chip>
          </li>
        ))}
      </nav>
      <section>
        <ul className="flex flex-col gap-[40px]">
          {shownAiResumes.map(({ id, updatedAt, content, AiCapabilities }) => (
            <li key={id}>
              <AiRecommendResumeListCard
                // API에 타이틀 추가
                title={`[${AiCapabilities.map((capability) => capability).join(', ')}] 키워드로 AI가 추천한 자기소개서`}
                updatedAt={updatedAt}
                answer={content}
                aiCapabilities={AiCapabilities}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
