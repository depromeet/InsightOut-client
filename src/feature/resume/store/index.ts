import { create } from 'zustand';

import { QuestionStore } from '../types/store';

export const useQuestionStore = create<QuestionStore>((set) => ({
  title: '',
  answer: '',
  actions: {
    setTitle: (title) => set(() => ({ title: title })),
    setAnswer: (answer) => set(() => ({ answer: answer })),
  },
}));

export const useTitle = () => useQuestionStore((state) => state.title);
export const useAnswer = () => useQuestionStore((state) => state.answer);

export const useQuestionActions = () => useQuestionStore((state) => state.actions);
