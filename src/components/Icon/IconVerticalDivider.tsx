import type { SVGProps } from 'react';
const SvgVerticalDivider = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={21} fill="none" {...props}>
    <path stroke="#A9ABB8" strokeLinecap="round" d="M5 4.5v12" />
  </svg>
);
export default SvgVerticalDivider;
