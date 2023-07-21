import questionApi from '@/apis/resume/question';
import PrefetchHydration from '@/components/tanstackQuery/PrefetchHydration';
import ResumeForm from '@/features/resume/components/ResumeForm/ResumeForm';
import { QUESTION_KEY } from '@/shared/constants/querykeys';

const Page = ({ params: { questionId } }: { params: { questionId: string } }) => {
  return (
    <div className="w-[700px] h-max min-h-[976px] border-[1px] border-purple-100 shadow-toast rounded-3xl bg-white py-[30px] px-11">
      {/* @ts-expect-error Server Component */}
      <PrefetchHydration
        queryKey={QUESTION_KEY.detail([{ questionId }])}
        queryFn={() => questionApi.get({ questionId })}>
        <ResumeForm />
      </PrefetchHydration>
    </div>
  );
};

export default Page;
