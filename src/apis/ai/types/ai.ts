export type AiParams = {
  keyword: {
    experienceId: number;
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  resume: {
    experienceId: number;
    capabilityIds: number[];
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  submit: {
    experienceId: number;
    situation: string;
    task: string;
    action: string;
    result: string;
  };
};

export type AiResponse = {
  keyword: {
    capabilities: [
      {
        id: number;
        keyword: string;
      },
      {
        id: number;
        keyword: string;
      }
    ];
  };
  resume: {
    resume: string;
  };
  submit: {
    AiRecommendQuestion: [
      {
        id: number;
        title: string;
      }
    ];
    ExperienceInfo: {
      analysis: string;
    };
    ExperienceCapability: string[];
    AiResume: {
      content: string;
      AiResumeCapability: string[];
    };
    summaryKeywords: string[];
    title: string;
    situation: string;
    task: string;
    action: string;
    result: string;
    startDate: string;
    endDate: string;
  };
};
