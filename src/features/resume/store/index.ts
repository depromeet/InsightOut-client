import { create } from 'zustand';

import { QuestionStore } from '../types/store';

export const useQuestionStore = create<QuestionStore>((set) => ({
  title: '',
  answer: '',
  isEditMode: true,
  spellErrors: [],
  actions: {
    setTitle: (title) => set(() => ({ title })),
    setAnswer: (answer) => set(() => ({ answer })),
    setIsEditMode: (isEditMode) => set(() => ({ isEditMode })),
    setSpellErrors: (spellErrors) => set(() => ({ spellErrors })),
  },
}));

export const useTitle = () => useQuestionStore((state) => state.title);
export const useAnswer = () => useQuestionStore((state) => state.answer);
export const useIsEditMode = () => useQuestionStore((state) => state.isEditMode);
export const useSpellErrors = () => useQuestionStore((state) => state.spellErrors);

export const useQuestionActions = () => useQuestionStore((state) => state.actions);
