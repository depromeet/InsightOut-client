import { SpellCheckData } from './question';

export interface QuestionState {
  title: string;
  answer: string;
  isEditMode: boolean;
  spellErrors: SpellCheckData[];
}

export interface QuestionActions {
  setTitle: (title: QuestionState['title']) => void;
  setAnswer: (answer: QuestionState['answer']) => void;
  setIsEditMode: (isEditMode: QuestionState['isEditMode']) => void;
  setSpellErrors: (spellErrors: QuestionState['spellErrors']) => void;
}

export interface QuestionStore extends QuestionState {
  actions: QuestionActions;
}
