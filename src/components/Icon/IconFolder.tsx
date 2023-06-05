import { ComponentProps } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

const IconFolder = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-current', className)}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M20.4 18.012a1.8 1.8 0 0 1-1.8 1.8H5.4a1.8 1.8 0 0 1-1.8-1.8V5.747a1.8 1.8 0 0 1 1.8-1.8h5.285c.4 0 .775.2.998.535l1.088 1.63a1.2 1.2 0 0 0 .998.535H18.6a1.8 1.8 0 0 1 1.8 1.8v9.565Z"
    />
  </svg>
);

export default IconFolder;
