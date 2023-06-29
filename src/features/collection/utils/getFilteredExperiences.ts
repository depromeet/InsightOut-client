import { Experience } from '../types';

const getFilteredExperiences = (experiences: Experience[], selectedCapacityId: number) =>
  experiences.filter((experience) => experience.capabilities.find((capacity) => capacity.id === selectedCapacityId));
export default getFilteredExperiences;
