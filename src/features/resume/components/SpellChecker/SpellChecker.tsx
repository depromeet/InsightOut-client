import { PropsWithChildren } from 'react';

import { Spinner } from '@chakra-ui/react';
import { MutationStatus } from '@tanstack/react-query';

import Button from '@/components/Button/Button';
import IconReset from '@/components/Icon/IconReset';

import useSpellCheckResult from '../../hooks/useSpellCheckResult';
import { useAnswer, useQuestionActions } from '../../store';
import { SpellCheckData } from '../../types/question';
import SpellCheckTitle from './SpellCheckTitle';

// FIXME: api 연결 시 분리 예정 (14줄 ~ 28줄)
type SpellCheckResponse = {
  type: string;
  token: string;
  suggestions: string[];
  context: string;
}[][];

/**
 * 서버 응답 변형해서 사용하기 위한 함수
 * - 외부 맞춤법 API 사용으로 인해 백엔드에서 응답 수정이 불가능하다고 합니다.
 * - https://github.com/depromeet/InsightOut-client/issues/92 참고
 *
 * @param response 서버에서 보내주는 response
 */
const formatSpellCheckResponse = (response: SpellCheckResponse) => {
  return response.flat().map(({ token, suggestions, context }, index) => ({
    id: index,
    error: token,
    correct: suggestions[0],
    errorContext: context,
  }));
};

// FIXME: api 연결 후 삭제 예정 (37줄 ~ 72줄)
const demoServerResponse = [
  [
    {
      type: 'space',
      token: '일년에',
      suggestions: ['일 년에'],
      context: '최초로 시작되어 일년에 한바퀴를 돌면서',
    },
    {
      type: 'space',
      token: '한바퀴를',
      suggestions: ['한 바퀴를'],
      context: '시작되어 일년에 한바퀴를 돌면서 받는',
    },
    {
      type: 'space',
      token: '7통입니다.',
      suggestions: ['7 통입니다.'],
      context: '절대로 안됩니다. 7통입니다. 이 편지를',
    },
    {
      type: 'space',
      token: '깃들것입니다.',
      suggestions: ['깃들 것입니다.'],
      context: '사람은 행운이 깃들것입니다. 힘들겠지만 좋은게',
    },
    {
      type: 'space',
      token: '좋은게',
      suggestions: ['좋은 게'],
      context: '깃들것입니다. 힘들겠지만 좋은게 좋다고 생각하세요.',
    },
  ],
];
const demoData = formatSpellCheckResponse(demoServerResponse);
const demoStatus = 'success';

const SpellCheckContainer = ({ children }: PropsWithChildren) => (
  <div className="relative flex items-center justify-between rounded-lg shadow-toast border-[1px] border-gray-100">
    {children}
  </div>
);

// FIXME: api 연결 후 삭제 예정 - 응답 값을 props로 전달받지 않습니다!
type SpellCheckerProps = {
  status: MutationStatus;
  result?: SpellCheckData[];
};

const SpellChecker = ({ status = demoStatus, result = demoData }: SpellCheckerProps) => {
  const answer = useAnswer();
  const { setIsEditMode } = useQuestionActions();

  const { spellCheckResult, setSpellCheckResult } = useSpellCheckResult(status, result);

  const buttonContent = {
    idle: '검사하기',
    loading: '',
    success: '초기화',
    error: '초기화',
  };

  // FIXME: api 연결
  const handleSpellCheckButtonClick = () => {};

  const handleResetButtonClick = () => {
    setSpellCheckResult('idle');
    setIsEditMode(true);
  };

  return (
    <SpellCheckContainer>
      <SpellCheckTitle status={spellCheckResult} />
      <Button
        type="button"
        variant="outlined"
        size="M"
        disabled={!!answer}
        onClick={spellCheckResult === 'idle' ? handleSpellCheckButtonClick : handleResetButtonClick}
        onlyIcon={spellCheckResult === 'loading' && <Spinner width="24px" height="24px" />}
        leftIcon={
          (spellCheckResult === 'correct' || spellCheckResult === 'error') && (
            <IconReset className="[&>path]:!fill-none" />
          )
        }
        className="absolute right-[24px] top-[15px] min-w-[71px]">
        {buttonContent[status]}
      </Button>
    </SpellCheckContainer>
  );
};

export default SpellChecker;
