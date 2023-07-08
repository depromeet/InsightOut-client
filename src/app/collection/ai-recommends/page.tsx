'use client';

import { useEffect, useState } from 'react';

import Chip from '@/components/Chip/Chip';
import AiRecommendResumeListCard from '@/features/collection/components/cards/AiRecommendResumeCard';
import { useGetAiResumes } from '@/hooks/reactQuery/ai/query';

const Page = () => {
  const { data } = useGetAiResumes();

  const aiRecommendKeyword = data?.availableKeywords || [];
  const aiRecommend = data?.AiResumes || [];

  const initialAiRecommenedKeyword = aiRecommendKeyword[0];

  const [selectedAiRecommend, setSelectedAiRecommend] = useState(initialAiRecommenedKeyword);

  useEffect(() => {
    setSelectedAiRecommend(initialAiRecommenedKeyword);
  }, [initialAiRecommenedKeyword]);

  const shownAiResumes = aiRecommend.filter(({ AiCapabilities }) => AiCapabilities.includes(selectedAiRecommend));

  return (
    <div>
      <section className="flex flex-row justify-between items-center my-[24px]">
        <nav>
          <ul className="flex flex-row gap-[8px]">
            {aiRecommendKeyword.map((keyword) => (
              <li key={'ai-keyword' + keyword} className="list-none">
                <Chip
                  size="M"
                  variant={selectedAiRecommend === keyword ? 'secondary-pressed' : 'secondary'}
                  onClick={() => setSelectedAiRecommend(keyword)}>
                  {keyword}
                </Chip>
              </li>
            ))}
          </ul>
        </nav>
      </section>
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
