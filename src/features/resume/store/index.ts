import { create } from 'zustand';

import { QuestionStore } from '../types/store';

export const useQuestionStore = create<QuestionStore>((set) => ({
  title: '',
  answer: '',
  isSpellCheckMode: false,
  spellErrors: [],
  actions: {
    setTitle: (title) => set(() => ({ title })),
    setAnswer: (answer) => set(() => ({ answer })),
    setIsSpellCheckMode: (isSpellCheckMode) => set(() => ({ isSpellCheckMode })),
    setSpellErrors: (spellErrors) => set(() => ({ spellErrors })),
  },
}));

export const useTitle = () => useQuestionStore((state) => state.title);
export const useAnswer = () => useQuestionStore((state) => state.answer);
export const useIsSpellCheckMode = () => useQuestionStore((state) => state.isSpellCheckMode);
export const useSpellErrors = () => useQuestionStore((state) => state.spellErrors);

export const useQuestionActions = () => useQuestionStore((state) => state.actions);
