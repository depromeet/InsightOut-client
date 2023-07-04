/**
 * @param utc 2023-06-25T23:35:04.381Z
 * @returns 23년 06월 26일 8시 35분
 */
const formatYYMMDDhhmm = (utc?: string) => {
  if (!utc) return '';

  const date = new Date(utc);

  const YYMMDD = new Intl.DateTimeFormat('ko-KR', { dateStyle: 'long' })
    .format(date)
    .replace(/^20(\d{2})년 (\d{1,2})월 (\d{1,2})일$/, '$1년 $2월 $3일')
    .replace(/(\d{2})년 (\d{1})월 (\d{1,2})일/g, '$1년 0$2월 $3일');

  const hhmm = new Intl.DateTimeFormat('ko-KR', {
    timeStyle: 'long',
    hour12: false,
  })
    .format(date)
    .replace(/(분).*$/, '$1');

  return `${YYMMDD} ${hhmm}`;
};

export default formatYYMMDDhhmm;
