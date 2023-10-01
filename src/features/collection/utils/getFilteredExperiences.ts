import { Experience } from '../types';

const getFilteredExperiences = (experiences: Experience[], selectedCapability: string) => {
  if (selectedCapability === '전체') return experiences;

  return experiences.filter((experience) =>
    experience.experienceCapabilityKeywords?.find((capability) => capability === selectedCapability)
  );
};
export default getFilteredExperiences;
