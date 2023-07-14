import { PropsWithChildren } from 'react';

import { Spinner } from '@chakra-ui/react';

import Button from '@/components/Button/Button';
import IconReset from '@/components/Icon/IconReset';
import { useSpellCheck } from '@/hooks/reactQuery/resume/spellCheck/mutation';

import useSpellCheckResult from '../../hooks/useSpellCheckResult';
import { useAnswer, useQuestionActions } from '../../store';
import SpellCheckTitle from './SpellCheckTitle';

const SpellCheckContainer = ({ children }: PropsWithChildren) => (
  <div className="relative flex items-center justify-between rounded-lg shadow-toast border-[1px] border-gray-100">
    {children}
  </div>
);

const BUTTON_CONTENT = {
  idle: '검사하기',
  loading: '',
  correct: '초기화',
  error: '초기화',
} as const;

const SpellChecker = () => {
  const answer = useAnswer();
  const { setIsSpellCheckMode } = useQuestionActions();

  const { mutate: spellCheck, data: result, status } = useSpellCheck();
  const { spellCheckResult, setSpellCheckResult } = useSpellCheckResult(status, result ?? []);

  const handleSpellCheckButtonClick = () => {
    spellCheck(answer);
  };

  const handleResetButtonClick = () => {
    setSpellCheckResult('idle');
    setIsSpellCheckMode(false);
  };

  return (
    <SpellCheckContainer>
      <SpellCheckTitle status={spellCheckResult} />
      <Button
        type="button"
        variant="outlined"
        size="M"
        disabled={!answer}
        onClick={spellCheckResult === 'idle' ? handleSpellCheckButtonClick : handleResetButtonClick}
        onlyIcon={spellCheckResult === 'loading' && <Spinner width="24px" height="24px" />}
        leftIcon={
          (spellCheckResult === 'correct' || spellCheckResult === 'error') && (
            <IconReset className="[&>path]:!fill-none" />
          )
        }
        className="absolute right-[24px] top-[15px] min-w-[71px]">
        {BUTTON_CONTENT[spellCheckResult]}
      </Button>
    </SpellCheckContainer>
  );
};

export default SpellChecker;
