import { create } from 'zustand';

interface experienceIdState {
  experienceId: number;
  setExperienceId: (experienceId: number) => void;
  resetExperienceId: () => void;
}

const experienceIdStore = create<experienceIdState>((set) => ({
  experienceId: NaN,
  setExperienceId: (experienceId) =>
    set(() => ({
      experienceId,
    })),
  resetExperienceId: () => set(() => ({ experienceId: NaN })),
}));

export const useExperienceId = experienceIdStore;
