import { Experience } from '../types';

const getFilteredExperiences = (experiences: Experience[], selectedCapabilityId: number) =>
  experiences.filter((experience) =>
    experience.capabilities.find((capability) => capability.id === selectedCapabilityId)
  );
export default getFilteredExperiences;
