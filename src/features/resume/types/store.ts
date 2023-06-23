export interface QuestionState {
  title: string;
  answer: string;
}

export interface QuestionActions {
  setTitle: (title: QuestionState['title']) => void;
  setAnswer: (answer: QuestionState['answer']) => void;
}

export interface QuestionStore extends QuestionState {
  actions: QuestionActions;
}
