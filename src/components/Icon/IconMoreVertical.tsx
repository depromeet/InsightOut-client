import { ComponentProps } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

const IconMoreVertical = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-gray-400', className)}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M10 3.333A.833.833 0 1 0 10 5a.833.833 0 0 0 0-1.667ZM10 9.166a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667ZM10 15a.833.833 0 1 0 0 1.667A.833.833 0 0 0 10 15Z"
    />
  </svg>
);

export default IconMoreVertical;
