import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import { useGetResumes } from '@/hooks/reactQuery/resume/query';

import { useTitle } from '../store';
import { ResumeData } from '../types/resume';

const useResumeList = () => {
  const { questionId } = useParams();
  const currentEditingTitle = useTitle();
  const { data } = useGetResumes();

  const [resumeList, setResumeList] = useState<ResumeData[]>();

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
  }, [questionId, currentEditingTitle, data]);

  return {
    resumeList,
  };
};

export default useResumeList;
