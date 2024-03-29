import { Route } from 'next';

export type Capability = {
  id: number;
  keyword: string;
  count: number;
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
  AiRecommendQuestions?: AiRecommendQuestions[];
}

export type AiRecommendQuestions = {
  id: number;
  title: string;
};

export type ExperienceInfo = {
  experienceInfoId: number;
  experienceRole: string;
  motivation: string;
  analysis: string;
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

export type PageInfo = {
  keyword: string;
  subMessage: string;
  buttonText: string;
  redirectUrl: Route;
};

export type PageTextcontent = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  [key: string]: PageInfo;
};
