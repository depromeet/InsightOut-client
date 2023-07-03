'use client';

import Image from 'next/image';

import { tw } from '@/shared/utils/tailwindMerge';

export const LOOPER = {
  일잘러: {
    src: '/images/home/img-home-looper-1.png',
    backgroundColor: 'bg-primary-400',
    color: 'text-white',
  },
  집요함: {
    src: `/images/home/img-home-looper-${Math.floor(Math.random() * 3) + 2}.png`,
    backgroundColor: 'bg-[#f1fdfe]',
    color: 'text-primary-500',
  },
  '정의의 사도': {
    src: '/images/home/img-home-looper-4.png',
    backgroundColor: 'bg-primary-100',
    color: 'text-purple-100',
  },
  아이디어뱅크: {
    src: '/images/home/img-home-looper-5.png',
    backgroundColor: 'bg-[#F0F0F5]',
    color: 'text-primary-500',
  },
  '이 시대의 리더': {
    src: '/images/home/img-home-looper-5.png',
    backgroundColor: 'bg-[#F0F0F5]',
    color: 'text-primary-500',
  },
  커뮤니케이터: {
    src: '/images/home/img-home-looper-5.png',
    backgroundColor: 'bg-[#F0F0F5]',
    color: 'text-primary-500',
  },
  문제해결: {
    src: '/images/home/img-home-looper-5.png',
    backgroundColor: 'bg-[#F0F0F5]',
    color: 'text-primary-500',
  },
} as const;

type LooperCardProps = {
  name: keyof typeof LOOPER;
};

const LooperCard = ({ name }: LooperCardProps) => {
  const { src, backgroundColor, color } = LOOPER[name];

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
