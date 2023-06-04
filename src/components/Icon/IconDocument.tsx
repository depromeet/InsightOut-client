import { tw } from '@/services/utils/tailwindMerge';
import { ComponentProps } from 'react';

const IconDocument = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-current', className)}
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.987 2.798a1.111 1.111 0 0 0-.757-.298H5c-.441 0-.865.163-1.178.454a1.5 1.5 0 0 0-.488 1.098v11.896c0 .412.176.806.488 1.098.313.29.737.454 1.179.454h10c.442 0 .866-.163 1.178-.454a1.5 1.5 0 0 0 .488-1.098v-8.31c0-.308-.128-.602-.354-.812l-4.326-4.028ZM13.335 14.023H6.668M13.335 10.805H6.668"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.667 2.917V7.5h5" />
  </svg>
);

export default IconDocument;
