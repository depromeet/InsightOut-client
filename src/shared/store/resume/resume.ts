import { create } from 'zustand';

type State = {
  title: string;
  answer: string;
};

type Action = {
  setTitle: (title: State['title']) => void;
  setAnswer: (answer: State['answer']) => void;
};

export const useResumeStore = create<State & Action>((set) => ({
  title: '',
  answer: '',
  setTitle: (title) => set(() => ({ title: title })),
  setAnswer: (answer) => set(() => ({ answer: answer })),
}));
