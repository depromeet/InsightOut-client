'use client';

import ResumeForm from '@/features/resume/components/ResumeForm/ResumeForm';
import { useGetResumes } from '@/hooks/reactQuery/resume/query';

const Page = () => {
  const { data: resumeList } = useGetResumes();
  const firstQuestionId = resumeList?.filter(({ questions }) => questions.length)[0]?.questions[0].id;

  if (!firstQuestionId) return null;

  return (
    <div className="w-[700px] h-max min-h-[976px] border-[1px] border-purple-100 shadow-toast rounded-3xl bg-white py-[30px] px-11">
      <ResumeForm questionId={firstQuestionId} />
    </div>
  );
};

export default Page;
