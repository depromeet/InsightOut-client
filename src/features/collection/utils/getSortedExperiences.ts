import dayjs from 'dayjs';
import { Experience } from '../types';

const getSortedExperiences = (experiences: Experience[], isSortedByUpdatedAt: boolean) =>
  experiences.sort((a, b) => {
    const sortedA = isSortedByUpdatedAt ? dayjs(a.updatedAt).valueOf() : dayjs(a.startDate).valueOf();
    const sortedB = isSortedByUpdatedAt ? dayjs(b.updatedAt).valueOf() : dayjs(b.startDate).valueOf();
    return sortedB - sortedA;
  });

export default getSortedExperiences;
