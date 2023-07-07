export type Capability = {
  id: number;
  keyword: string;
  count: number;
  // TODO: Capability keyword ai 어떻게 되는지 확인
  isAi?: boolean;
};

export interface Experience {
  id: number;
  title?: string | null;
  situation?: string | null;
  task?: string | null;
  action?: string | null;
  result?: string | null;
  startDate: string | null;
  endDate: string | null;
  updatedAt?: string | null;
  experienceStatus: ExperienceStatus;
  summaryKeywords?: string[];
  experienceCapabilityKeywords?: string[];
  aiRecommendKeywords?: string[];
}

export type ExperienceStatus = 'INPROGRESS' | 'DONE';
export type Capacity = {
  id: number;
  keyword: string;
  count: number;
};

export interface ResumeTitle {
  id: number;
  title?: string;
  createdAt: string;
  updatedAt: string;
}
