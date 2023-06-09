'use client';

import { ChangeEvent, FormEvent, useRef } from 'react';

import { useParams } from 'next/navigation';

import Button from '@/components/Button/Button';
import { TextLengthMessage } from '@/components/Input/TextLengthMessage';
import { useUpdateQuestion } from '@/hooks/reactQuery/resume/question/mutation';
import { useGetQuestion } from '@/hooks/reactQuery/resume/question/query';
import useDebounce from '@/hooks/useDebounce';
import { MAX_LENGTH } from '@/shared/constants/maxLength';
import { resizeHeight } from '@/shared/utils/autoSizeTextarea';
import formatYYMMDDhhmm from '@/shared/utils/date/formatYYMMDDhhmm';

import { AUTO_SAVE_TIME } from '../../constants/autoSaveTime';
import { useAnswer, useIsSpellCheckMode, useQuestionActions, useTitle } from '../../store';
import NotFoundResume from '../NotFound/NotFoundResume';
import SpellChecker from '../SpellChecker/SpellChecker';
import SpellErrorPreview from '../SpellChecker/SpellErrorPreview';
import SavingCaption from './SavingCaption';

const ResumeForm = () => {
  const title = useTitle();
  const answer = useAnswer();
  const isSpellCheckMode = useIsSpellCheckMode();
  const { setTitle, setAnswer } = useQuestionActions();
  const { questionId } = useParams();

  const { data: question } = useGetQuestion(
    { questionId },
    {
      onSuccess({ title, answer }) {
        setTitle(title ?? ''); // NOTE: answer이 없을 때 서버에서 null을 보내줘서 빈 문자열로 바꿨습니다
        setAnswer(answer ?? '');
      },
    }
  );
  const { mutate: updateQuestion, status } = useUpdateQuestion(+questionId);

  const titleTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTitleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    resizeHeight(titleTextareaRef);
    setTitle(e.target.value);
  };

  const debouncedUpdateQuestion = useDebounce(() => updateQuestion({ title, answer }), AUTO_SAVE_TIME);

  const handleAnswerChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
    debouncedUpdateQuestion();
  };

  const handleAnswerBlur = () => {
    updateQuestion({ title, answer });
  };

  const handleResumeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateQuestion({ title, answer });
  };

  if (!question) return <NotFoundResume />;

  return (
    <form onSubmit={handleResumeSubmit}>
      <header className="flex items-center justify-between mb-[14px]">
        <SavingCaption updatedAt={formatYYMMDDhhmm(question.updatedAt)} currentSavingStatus={status} />
        <div className="flex items-center gap-4">
          <TextLengthMessage currentLength={answer.length} maxLength={MAX_LENGTH.QUESTION} />
          <Button variant="gray900" size="M" disabled={answer.length === 0}>
            임시 저장
          </Button>
        </div>
      </header>
      <textarea
        ref={titleTextareaRef}
        value={title}
        onChange={handleTitleChange}
        maxLength={MAX_LENGTH.TITLE}
        placeholder="문항 질문을 적어보세요."
        className="w-full min-h-[96px] py-[6px] resize-none subhead2 placeholder:text-light"
      />
      {isSpellCheckMode ? (
        <SpellErrorPreview />
      ) : (
        <textarea
          value={answer}
          onChange={handleAnswerChange}
          onBlur={handleAnswerBlur}
          maxLength={MAX_LENGTH.QUESTION}
          placeholder="질문에 대한 답변을 적어보세요."
          className="w-[612px] h-[660px] resize-none b1 text-main placeholder:text-light"
        />
      )}
      <SpellChecker />
    </form>
  );
};

export default ResumeForm;
