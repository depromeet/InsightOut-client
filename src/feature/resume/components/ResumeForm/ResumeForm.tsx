'use client';

import { useRef, ChangeEvent } from 'react';

import { useResumeStore } from '@/shared/store/resume/resume';
import { MAX_LENGTH } from '@/services/constants/maxLength';
import { resizeHeight } from '@/services/utils/autoSizeTextarea';
import { QuestionData } from '@/services/@types/data/question';

import { TextLengthMessage } from '@/components/Input/TextLengthMessage';
import Button from '@/components/Button/Button';
import SavingCaption from './SavingCaption';

const ResumeForm = ({ id, title: initialTitle, answer: initialAnswer, updatedAt }: QuestionData) => {
  /** TODO: props로 전달받은 title, answer 값으로 초기화 */
  const { title, setTitle } = useResumeStore((resume) => ({ title: resume.title, setTitle: resume.setTitle }));
  const { answer, setAnswer } = useResumeStore((resume) => ({
    answer: resume.answer,
    setAnswer: resume.setAnswer,
  }));

  const titleInputRef = useRef<HTMLTextAreaElement>(null);

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    resizeHeight(titleInputRef);
    setTitle(e.target.value);
  };

  const handleAnswerChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
    /**TODO: debounce patch */
  };

  const handleResumeSubmit = () => {};

  return (
    <form onSubmit={handleResumeSubmit}>
      <header className="flex items-center justify-between mb-[14px]">
        {/* TODO: savingStatus 서버 상태에 따라 변경 */}
        <SavingCaption updatedAt={updatedAt} currentSavingStatus="loading" />
        <div className="flex items-center gap-4">
          <TextLengthMessage currentLength={answer.length} maxLength={MAX_LENGTH.QUESTION} />
          <Button variant={'primary'} size="md" disabled={answer.length === 0}>
            임시 저장
          </Button>
        </div>
      </header>
      <textarea
        ref={titleInputRef}
        value={title}
        onChange={handleTitleChange}
        maxLength={MAX_LENGTH.TITLE}
        placeholder="문항 질문을 적어보세요."
        className="w-full min-h-[96px] py-[6px] resize-none subhead2 placeholder:text-light"
      />
      <textarea
        value={answer}
        onChange={handleAnswerChange}
        maxLength={MAX_LENGTH.QUESTION}
        placeholder="질문에 대한 답변을 적어보세요."
        className="w-[660px] h-[660px] resize-none b1 text-main placeholder:text-light"
      />
    </form>
  );
};

export default ResumeForm;
