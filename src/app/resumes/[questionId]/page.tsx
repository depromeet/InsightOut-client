import ResumeForm from '@/features/resume/components/ResumeForm/ResumeForm';

const Page = () => {
  /** FIXME: GET /resumes/questions/${questionId} */
  const mockData = {
    id: 1234,
    title: '디프만 13기 지원동기',
    answer: '디프만을 통한 빠른 성장',
    updatedAt: '2023-06-05T05:58:44.402Z',
  };

  return (
    <section className="resume-section py-[30px] px-11">
      <ResumeForm {...mockData} />
    </section>
  );
};

export default Page;
