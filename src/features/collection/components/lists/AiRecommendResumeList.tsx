import { AiResume } from '@/apis/ai/types/ai';
import AiRecommendResumeListCard from '@/features/collection/components/cards/AiRecommendResumeCard';

type Props = {
  shownAiResumes: AiResume[];
};

const AiRecommendResumeList = ({ shownAiResumes }: Props) => {
  return (
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
  );
};

export default AiRecommendResumeList;
