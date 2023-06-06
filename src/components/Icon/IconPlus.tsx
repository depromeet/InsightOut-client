import { ComponentProps } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

const IconPlus = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-gray-600', className)}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 15.983V4.317M15.833 10.15H4.166" />
  </svg>
);

export default IconPlus;
