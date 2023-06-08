'use client';

import { ResumeData } from '@/services/@types/data/resume';

import Button from '@/components/Button/Button';
import IconPencil from '@/components/Icon/IconPencil';

import Resume from './Resume/Resume';
import ResumeListContainer from './Resume/ResumeListContainer';

type LeftNavigationBarProps = { resumeList: ResumeData[] };

const LeftNavigationBar = ({ resumeList }: LeftNavigationBarProps) => {
  const handleAddFolderButtonClick = () => {
    /** TODO:POST 요청
     */
  };

  return (
    <nav className="min-w-[363px] py-12 px-[30px]">
      <header className="flex items-center justify-between mb-7">
        <h1 className="flex gap-[6px] subhead1">
          <IconPencil />
          <span>내 자기소개서</span>
        </h1>
        <Button variant="secondary" size="md" onClick={handleAddFolderButtonClick}>
          자기소개서 추가
        </Button>
      </header>
      <ResumeListContainer>
        {resumeList.map((resume) => (
          <Resume key={resume.id} resume={resume} />
        ))}
      </ResumeListContainer>
    </nav>
  );
};

export default LeftNavigationBar;
