'use client';

import NotFoundResume from '@/features/resume/components/NotFound/NotFoundResume';
import ResumeForm from '@/features/resume/components/ResumeForm/ResumeForm';
import { useGetResumes } from '@/hooks/reactQuery/resume/query';

const Page = () => {
  const { data: resumeList } = useGetResumes();
  const firstQuestionId = resumeList?.filter(({ questions }) => questions.length)[0]?.questions[0].id;

  return (
    <div className="resume-section h-[976px] py-[30px] px-11">
      {firstQuestionId ? <ResumeForm questionId={firstQuestionId} /> : <NotFoundResume />}
    </div>
  );
};

export default Page;
