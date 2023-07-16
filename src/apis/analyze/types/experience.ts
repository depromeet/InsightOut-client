import { ExperienceFormValues } from '@/feature/analyze/types';
import { Experience } from '@/features/collection/types';

export type ExperienceParams = {
  get: { experienceId: number };
  put: WithRequired<Partial<ExperienceFormValues>, 'experienceId'>;
  submit: Partial<ExperienceFormValues>;
};

export type ExperienceResponse = Experience;
