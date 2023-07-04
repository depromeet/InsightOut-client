import Image from 'next/image';

import { tw } from '@/shared/utils/tailwindMerge';

export const LOOPER = {
  일잘러: {
    backgroundColor: 'bg-primary-400',
    color: 'text-white',
  },
  집요함: {
    backgroundColor: 'bg-[#f1fdfe]',
    color: 'text-primary-500',
  },
  '정의의 사도': {
    backgroundColor: 'bg-primary-100',
    color: 'text-primary-500',
  },
  아이디어뱅크: {
    backgroundColor: 'bg-[#F0F0F5]',
    color: 'text-primary-500',
  },
  '이 시대의 리더': {
    backgroundColor: 'bg-[#F0F0F5]',
    color: 'text-primary-500',
  },
  커뮤니케이터: {
    backgroundColor: 'bg-[#F0F0F5]',
    color: 'text-primary-500',
  },
  문제해결: {
    backgroundColor: 'bg-[#F0F0F5]',
    color: 'text-primary-500',
  },
} as const;

type LooperCardProps = {
  name: keyof typeof LOOPER;
};

const LooperCard = ({ name }: LooperCardProps) => {
  const { backgroundColor, color } = LOOPER[name];
  const src = `/images/home/img-home-looper-${Math.floor(Math.random() * 5) + 1}.png`;

  return (
    <div
      className={tw(
        'relative flex flex-col items-center justify-center w-[326px] h-[326px] rounded-[38px] gap-[18px]',
        backgroundColor
      )}>
      <Image src={src} className="w-[200px] h-[200px]" width={200} height={200} alt={name} />
      <span className={tw('text-[24px] font-bold leading-[32px]', color)}>#{name}</span>
    </div>
  );
};

export default LooperCard;
