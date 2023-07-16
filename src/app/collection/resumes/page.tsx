'use client';

import { useEffect, useState } from 'react';

import { notFound } from 'next/navigation';

import Chip from '@/components/Chip/Chip';
import ResumeCard from '@/features/collection/components/cards/ResumeCard';
import { INITIAL_RESUME } from '@/features/collection/constants';
import { ResumeTitle } from '@/features/collection/types';
import { useGetResume, useGetResumesTitle } from '@/hooks/reactQuery/resume/query';

const Page = () => {
  const { data: resumes } = useGetResumesTitle({
    onSuccess: () => {
      if (!resume) notFound();
    },
  });

  const initialResumes = resumes ? resumes[0] : INITIAL_RESUME;

  const [selectedResume, setSelectedResume] = useState<ResumeTitle>(INITIAL_RESUME);

  const { data: resume } = useGetResume(
    { resumeId: selectedResume ? selectedResume?.id : 0 },
    {
      enabled: !!initialResumes,
    }
  );

  useEffect(() => {
    setSelectedResume(initialResumes);
  }, [initialResumes]);

  const questions = resume ? resume.questions : [];

  return (
    <>
      <section>
        <nav className="flex flex-row items-center gap-[8px] overflow-x-auto whitespace-nowrap scrollbar-hide p-[1px] my-[24px]">
          {resumes?.map((resume, index) => {
            const { id, title } = resume;
            return (
              <li key={`${index}-${id}`} className="list-none">
                <Chip
                  size="M"
                  variant={selectedResume?.title === title ? 'secondary-pressed' : 'secondary'}
                  onClick={() => setSelectedResume(resume)}>
                  {title || ''}
                </Chip>
              </li>
            );
          })}
        </nav>
      </section>
      <section>
        <ul className="flex flex-col gap-[40px]">
          {questions
            ? questions.map((question) => (
                <li key={question.id}>
                  <ResumeCard question={question} />
                </li>
              ))
            : ''}
        </ul>
      </section>
    </>
  );
};

export default Page;
