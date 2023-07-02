import instance from '@/apis';

import { SpellCheckParams, SpellCheckResponse } from './types/spellCheck';

const API_URL = '/resumes/questions/spell-check';

const spellCheckApi = {
  post: async ({ payload }: SpellCheckParams['post']): Promise<SpellCheckResponse> =>
    await instance.post(API_URL, payload),
};

export default spellCheckApi;
