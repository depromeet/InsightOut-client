import dayjs from 'dayjs';

const getExperiencePeriod = (startDate: string, endDate: string) => {
  const start = dayjs(startDate).format('YYYY.MM');
  const end = dayjs(endDate).format('YYYY.MM');
  return `${start} - ${end}`;
};

export default getExperiencePeriod;
