import dayjs from 'dayjs';

import { Experience } from '../types';

const getExperiencePeriod = (startDate: Experience['startDate'], endDate: Experience['endDate']) => {
  const start = dayjs(startDate).format('YYYY.MM');
  const end = dayjs(endDate).format('YYYY.MM');
  return `${start} - ${end}`;
};

export default getExperiencePeriod;
