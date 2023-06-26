import { Experience } from '../types';

const getFilteredExperiences = (experiences: Experience[], selectedCapacityId: number) => {
  return selectedCapacityId === 0
    ? experiences
    : experiences.filter((experience) =>
        experience.capabilities.find((capacity) => capacity.id === selectedCapacityId)
      );
};

export default getFilteredExperiences;
