import instance from '..';
import { ExperienceParams, ExperienceResponse } from './types/experience';

const experienceApi = {
  get: async () => await instance.get<ExperienceResponse, ExperienceResponse>('/experience'),
  post: async ({ ...params }: ExperienceParams['post']) =>
    await instance.post<ExperienceResponse, ExperienceResponse>('/experience', params),
};

export default experienceApi;
