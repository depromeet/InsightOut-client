import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { useGetResumes } from '@/hooks/reactQuery/resume/query';

import { useTitle } from '../store';
import { ResumeData } from '../types/resume';

/**
 * Aside에서 사용하는 자기소개서 목록을 반환하는 훅입니다
 * - 사용자가 ResumeForm에서 자기소개서 제목을 변경하면 Aside에 해당 제목으로 업데이트된 자기소개서 목록을 반환합니다.
 * @returns resumeList Aside에서 사용하는 자기소개서 목록
 */
const useResumesWithUpdatedTitle = () => {
  const { questionId } = useParams();
  const currentEditingTitle = useTitle();
  const { data } = useGetResumes();

  const [resumeList, setResumeList] = useState<ResumeData[]>();
  /**
   * 자기소개서 목록을 업데이트합니다.
   * - 사용자가 자기소개서 제목을 변경한 경우, 변경한 제목이 반영된 자기소개서 목록 값으로 업데이트합니다.
   * - 사용자가 자기소개서 제목을 변경한 경우, 기존 자기소개서 목록으로 업데이트합니다.
   */
  const updateResumeList = () => {
    const newReumeList = data?.map((resume) => {
      const currentEditingQuestion = resume.questions.find(({ id }) => id === +questionId);

      if (currentEditingQuestion) {
        const questionsWithNewTitle = resume.questions.map((question) =>
          question.id === currentEditingQuestion.id ? { ...question, title: currentEditingTitle } : question
        );
        return { ...resume, questions: questionsWithNewTitle };
      }
      return resume;
    });

    setResumeList(newReumeList);
  };

  useEffect(() => {
    updateResumeList();
  }, [currentEditingTitle, data]);

  return {
    resumeList,
  };
};

export default useResumesWithUpdatedTitle;
