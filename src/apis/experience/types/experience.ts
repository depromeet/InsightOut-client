import { ExperienceFormValues } from '@/feature/analyze/types';
import { Capability, Experience } from '@/features/collection/types';

export type ExperienceParams = {
  get: {
    id?: string;
    last?: boolean;
    capabilityId?: number;
    situation?: boolean;
    task?: boolean;
    action?: boolean;
    result?: boolean;
  };
  post: Partial<ExperienceFormValues>;
};

export type ExperiencesResponse = {
  data: Experience[];
  meta: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    itemCount: number;
    page: number;
    pageCount: number;
    take: number;
  };
};

export type ExperienceCapabilityParams = {
  get: {
    experienceId?: number;
  };
};

export type ExperienceCapabilityResponse = {
  get: Capability[];
};

export type ExperienceCountResponse = {
  get: { experience: number };
};
