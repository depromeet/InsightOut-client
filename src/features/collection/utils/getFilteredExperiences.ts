import { Experience } from '../types';

const getFilteredExperiences = (experiences: Experience[], selectedCapability: string) =>
  experiences.filter((experience) =>
    experience.experienceCapabilityKeywords?.find((capability) => capability === selectedCapability)
  );
export default getFilteredExperiences;
