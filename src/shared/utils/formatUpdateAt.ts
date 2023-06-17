import dayjs from 'dayjs';

const formatUpdatedAt = (input: string | Date) => `${dayjs(input).format('YYYY. MM. DD | HH:mm')} 마지막 수정`;

export default formatUpdatedAt;
