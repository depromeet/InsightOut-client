import { ExperienceFormValues } from '@/feature/analyze/types';

export type ExperienceParams = {
  get: { experienceId: number };
  put: WithRequired<Partial<ExperienceFormValues>, 'experienceId'>;
  submit: Partial<ExperienceFormValues>;
};

export type ExperienceResponse = {
  experienceId: number;
  title: string;
  startDate: string;
  endDate: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  experienceStatus: string;
  ExperienceInfo: {
    experienceInfoId: number;
    motivation: string;
    experienceRole: string;
    analysis: string;
  };
  summaryKeywords: string[];
  updatedAt: string;
  AiResume: [
    {
      content: string;
      AiResumeCapability: [
        {
          Capability: {
            keyword: string;
            keywordType: string;
          };
        },
        {
          Capability: {
            keyword: string;
            keywordType: string;
          };
        }
      ];
    }
  ];
};
