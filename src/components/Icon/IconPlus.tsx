import { ComponentProps } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

const IconPlus = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-gray-600', className)}
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M10 15.9844V4.31771" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.833 10.1509H4.16634" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default IconPlus;
