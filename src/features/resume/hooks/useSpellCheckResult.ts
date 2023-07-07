import { useEffect, useState } from 'react';

import { MutationStatus } from '@tanstack/react-query';

import { useQuestionActions } from '../store';
import { SpellCheckData, SpellCheckResult } from '../types/question';

/**
 * 서버 응답 상태와 맞춤법 검사 결과에 따라 맞춤법 결과 UI 상태를 반환하는 hook
 *
 * @param serverState tanstack query가 반환하는 status 값
 * @param spellErrors 서버로부터 응답 받은 맞춤법 오류 결과
 *
 * @returns 맞춤법 결과 상태 - loading | success | error
 * - loading: 서버에서 응답을 기다리고 있는 상태
 * - success: 맞춤법 오류가 없는 경우
 * - error: 맞춤법 오류가 있는 경우
 */
const useSpellCheckResult = (serverState: MutationStatus, spellErrors: SpellCheckData[]) => {
  const [spellCheckResult, setSpellCheckResult] = useState<SpellCheckResult>('idle');
  const { setIsSpellCheckMode, setSpellErrors } = useQuestionActions();

  useEffect(() => {
    if (serverState === 'idle' || serverState === 'loading') setSpellCheckResult(serverState);
    if (serverState === 'success') {
      if (spellErrors.length === 0) setSpellCheckResult('correct');
      else {
        setSpellCheckResult('error');
        setIsSpellCheckMode(true);
        setSpellErrors(spellErrors);
      }
    }
  }, [serverState, spellErrors]);

  return {
    spellCheckResult,
    setSpellCheckResult,
  };
};

export default useSpellCheckResult;
