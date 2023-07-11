import { create } from 'zustand';

import { ALL_CAPABILITY_KEYWORD } from '@/features/collection/constants';

import { ExperienceStore,QuestionStore } from '../types/store';

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

export const useExperienceStore = create<ExperienceStore>((set) => ({
  experienceId: 0,
  capabilityKeyword: ALL_CAPABILITY_KEYWORD,
  actions: {
    setExperienceId: (experienceId) => set(() => ({ experienceId })),
    setCapabilityKeyword: (capabilityKeyword) => set(() => ({ capabilityKeyword })),
  },
}));

export const useExperienceId = () => useExperienceStore((state) => state.experienceId);
export const useCapabilityKeyword = () => useExperienceStore((state) => state.capabilityKeyword);
export const useExperienceActions = () => useExperienceStore((state) => state.actions);
