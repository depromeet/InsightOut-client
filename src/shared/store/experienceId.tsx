import { create } from 'zustand';

interface experienceIdState {
  experienceId: number;
  setExperienceId: (experienceId: number) => void;
  resetExperienceId: () => void;
}

export const experienceIdStore = create<experienceIdState>((set) => ({
  experienceId: NaN,
  setExperienceId: (experienceId) =>
    set(() => ({
      experienceId,
    })),
  resetExperienceId: () => set(() => ({ experienceId: NaN })),
}));
