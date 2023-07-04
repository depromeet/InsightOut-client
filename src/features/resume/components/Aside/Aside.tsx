'use client';

import Button from '@/components/Button/Button';
import IconPencil from '@/components/Icon/IconPencil';
import { useCreateResume } from '@/hooks/reactQuery/resume/mutation';

import useResumeListWithUpdatedTitle from '../../hooks/useResumeListWithUpdatedTitle';
import Resume from './Resume/Resume';
import ResumeListContainer from './Resume/ResumeListContainer';

const Aside = () => {
  const { resumeList } = useResumeListWithUpdatedTitle();
  const { mutate: createResume } = useCreateResume();

  const handleAddFolderButtonClick = () => {
    createResume();
  };

  return (
    <aside className="min-w-[363px] py-12 px-[30px]">
      <header className="flex items-center justify-between mb-7">
        <h1 className="flex gap-[6px] subhead1">
          <IconPencil />
          <span>내 자기소개서</span>
        </h1>
        <Button variant="primary" size="M" onClick={handleAddFolderButtonClick}>
          자기소개서 추가
        </Button>
      </header>
      <ResumeListContainer expandedResumeCount={resumeList?.length}>
        {resumeList?.map((resume) => (
          <Resume key={resume.id} {...resume} />
        ))}
      </ResumeListContainer>
    </aside>
  );
};

export default Aside;
