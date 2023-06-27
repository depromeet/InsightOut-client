import dayjs from 'dayjs';

const formatUpdatedAt = (input: string | Date) => dayjs(input).format('YYYY. MM. DD | HH:mm');

export default formatUpdatedAt;
