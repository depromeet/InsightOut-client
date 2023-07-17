import { create } from 'zustand';

interface booleanState {
  value: boolean;
  setValue: (value: boolean) => void;
}

const booleanStore = create<booleanState>((set) => {
  return {
    value: false,
    setValue: (value) =>
      set(() => ({
        value,
      })),
  };
});

export const useBoolean = booleanStore;
