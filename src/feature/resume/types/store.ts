export interface ResumeState {
  title: string;
  answer: string;
}

export interface ResumeActions {
  setTitle: (title: ResumeState['title']) => void;
  setAnswer: (answer: ResumeState['answer']) => void;
}

export interface ReusmeStore extends ResumeState {
  actions: ResumeActions;
}
