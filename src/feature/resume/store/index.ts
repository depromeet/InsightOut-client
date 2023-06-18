import { create } from 'zustand';

import { ReusmeStore } from '../types/store';

export const useResumeStore = create<ReusmeStore>((set) => ({
  title: '',
  answer: '',
  actions: {
    setTitle: (title) => set(() => ({ title: title })),
    setAnswer: (answer) => set(() => ({ answer: answer })),
  },
}));

export const useTitle = () => useResumeStore((state) => state.title);
export const useAnswer = () => useResumeStore((state) => state.answer);

export const useResumeActions = () => useResumeStore((state) => state.actions);
