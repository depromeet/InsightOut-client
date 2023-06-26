import type { SVGProps } from 'react';
const IconClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="none" {...props}>
    <path
      stroke="#525463"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12 20.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
    <path stroke="#525463" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8.5v4L8.5 14" />
  </svg>
);
export default IconClock;
