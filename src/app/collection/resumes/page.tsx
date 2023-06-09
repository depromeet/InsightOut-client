'use client';

import { useEffect, useState } from 'react';

import { notFound } from 'next/navigation';

import ResumeCard from '@/features/collection/components/cards/ResumeCard';
import ChipListNav from '@/features/collection/components/nav/ChipListNav';
import { INITIAL_RESUME } from '@/features/collection/constants';
import { ResumeTitle } from '@/features/collection/types';
import { useGetResume, useGetResumesTitle } from '@/hooks/reactQuery/resume/query';

const Page = () => {
  const { data: resumes, isLoading: isTitleLoading } = useGetResumesTitle({
    onSuccess: () => {
      if (!resume) notFound();
    },
  });

  const initialResumes = resumes ? resumes[0] : INITIAL_RESUME;

  const [selectedResume, setSelectedResume] = useState<ResumeTitle>(initialResumes);

  const { data: resume, isLoading: isQuestionsLoading } = useGetResume(
    { resumeId: selectedResume ? selectedResume?.id : 0 },
    {
      enabled: !!initialResumes,
    }
  );

  useEffect(() => {
    setSelectedResume(initialResumes);
  }, [initialResumes]);

  if (isTitleLoading || isQuestionsLoading) return <p>Loading...</p>;

  const questions = resume ? resume.questions : [];

  return (
    <>
      {/* 자기소개서 제목 목록 */}
      <ChipListNav items={resumes || []} selectedItem={selectedResume?.title} changeItem={setSelectedResume} />
      {/* 자기소개서 상세 */}
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
