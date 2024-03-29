import questionApi from '@/apis/resume/question';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import ResumeForm from '@/features/resume/components/ResumeForm/ResumeForm';
import { QUESTION_KEY } from '@/shared/constants/querykeys';

const Page = ({ params: { questionId } }: { params: { questionId: string } }) => {
  return (
    <div className="resume-section h-[976px] py-[30px] px-11">
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration
        queryKey={QUESTION_KEY.detail([{ questionId }])}
        queryFn={() => questionApi.get({ questionId })}>
        <ResumeForm questionId={Number(questionId)} />
      </PrefetchHydration>
    </div>
  );
};

export default Page;
