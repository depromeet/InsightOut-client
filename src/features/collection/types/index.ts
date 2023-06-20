export type Capacity = {
  id: number;
  keyword: string;
  count: number;
  // TODO: Capacity keyword ai 어떻게 되는지 확인
  isAi?: boolean;
};

export interface Experience {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  updatedAt: string;
  experienceStatus: 'INPROGRESS' | 'DONE'; // boolean으로 수정하는건 어떨까?
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  summaries: string[];
  capabilities: Omit<Capacity, 'count'>[];
}
