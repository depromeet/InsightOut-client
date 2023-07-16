export type Capability = {
  id?: number;
  keyword?: string;
  count?: number;
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
  AiResume?: {
    content: string;
    AiResumeCapabilities: { Capability: { keyword: string } }[];
  };
  ExperienceInfo?: ExperienceInfo;
}

export type ExperienceInfo = {
  experienceId: number;
  experienceRole: string;
  motivation: string;
};

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
