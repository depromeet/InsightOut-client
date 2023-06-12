import { ComponentProps } from 'react';
import { tw } from '@/shared/utils/tailwindMerge';

const IconClock = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-gray-600', className)}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    {...props}>
    <path
      className="fill-none"
      d="M12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C7.58172 4.5 4 8.08172 4 12.5C4 16.9183 7.58172 20.5 12 20.5Z"
      stroke="#525463"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M12 8.5V12.5L8.5 14" stroke="#525463" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

export default IconClock;
