import instance from '@/apis';

import { SpellCheckParams } from './types/spellCheck';

const API_URL = '/resumes/questions/spell-check';

const spellCheckApi = {
  post: async ({ payload }: SpellCheckParams['post']) => await instance.post(API_URL, payload),
};

export default spellCheckApi;
