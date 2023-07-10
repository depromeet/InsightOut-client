'use client';

import { useEffect, useState } from 'react';

import AiRecommendResumeListCard from '@/features/collection/components/cards/AiRecommendResumeCard';
import ChipListNav from '@/features/collection/components/nav/ChipListNav';
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
      <ChipListNav items={aiRecommendKeyword} selectedItem={selectedAiRecommend} changeItem={setSelectedAiRecommend} />
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
