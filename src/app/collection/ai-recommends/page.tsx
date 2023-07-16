'use client';

import { useEffect, useState } from 'react';

import Chip from '@/components/Chip/Chip';
import AiRecommendResumeList from '@/features/collection/components/lists/AiRecommendResumeList';
import { useGetAiResumes } from '@/hooks/reactQuery/ai/query';

const Page = () => {
  const { data } = useGetAiResumes(undefined, { staleTime: Infinity });

  const aiRecommendKeyword = data?.availableKeywords || [];
  const aiRecommend = data?.AiResumes || [];

  const initialAiRecommenedKeyword = aiRecommendKeyword?.[0];

  const [selectedAiRecommend, setSelectedAiRecommend] = useState('');

  useEffect(() => {
    setSelectedAiRecommend(initialAiRecommenedKeyword);
  }, [initialAiRecommenedKeyword]);

  const shownAiResumes = aiRecommend.filter(({ AiCapabilities }) => AiCapabilities.includes(selectedAiRecommend));

  return (
    <div>
      <section>
        <nav className="flex flex-row items-center gap-[8px] overflow-x-auto whitespace-nowrap scrollbar-hide p-[1px] my-[24px]">
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
      </section>
      <section>
        <AiRecommendResumeList shownAiResumes={shownAiResumes} />
      </section>
    </div>
  );
};

export default Page;
