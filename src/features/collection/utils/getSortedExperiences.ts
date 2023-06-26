import dayjs from 'dayjs';
import { Experience } from '../types';
import { EXPERIENCE_SORT_BY } from '../constants';

const getSortedExperiences = (experiences: Experience[], sortBy: keyof typeof EXPERIENCE_SORT_BY) =>
  experiences.sort((a, b) => {
    const sortedA = sortBy === 'UPDATED_AT' ? dayjs(a.updatedAt).valueOf() : dayjs(a.startDate).valueOf();
    const sortedB = sortBy === 'EXPERIENCE_TIME' ? dayjs(b.updatedAt).valueOf() : dayjs(b.startDate).valueOf();
    return sortedB - sortedA;
  });

export default getSortedExperiences;
