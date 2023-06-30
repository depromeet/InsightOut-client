import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import spellCheckApi from '@/apis/resume/spellCheck';
import { SpellCheckParams } from '@/apis/resume/types/spellCheck';
import formatSpellCheckResponse from '@/features/resume/utils/formatSpellCheckResponse';

type SpellCheckResponse = ReturnType<typeof formatSpellCheckResponse>;

export const useSpellCheck = (
  options?: UseMutationOptions<SpellCheckResponse, AxiosError, SpellCheckParams['post']['payload']['sentence']>
) => {
  return useMutation(
    async (answer) => {
      const data = await spellCheckApi.post({ payload: { sentence: answer } });
      return formatSpellCheckResponse(data);
    },
    {
      ...options,
    }
  );
};
