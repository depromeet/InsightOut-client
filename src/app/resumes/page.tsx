import NotFoundResume from '@/features/resume/components/NotFound/NotFoundResume';

const Page = () => {
  return (
    <div className="flex flex-col w-[700px] h-max min-h-[976px] justify-center border-[1px] border-purple-100 shadow-toast rounded-3xl bg-white py-[30px] px-11">
      <NotFoundResume />
    </div>
  );
};

export default Page;
