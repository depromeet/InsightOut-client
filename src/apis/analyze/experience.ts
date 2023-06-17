import { ExperienceFormValues } from '@/feature/analyze/types';
import instance from '..';
import { ExperienceParams } from './types/experience';

const experienceApi = {
  get: () => instance.get<ExperienceFormValues, ExperienceFormValues>('/experience'),
  post: ({ ...params }: ExperienceParams['post']) =>
    instance.post<ExperienceFormValues, ExperienceFormValues>('/experience', params),
};

export default experienceApi;
