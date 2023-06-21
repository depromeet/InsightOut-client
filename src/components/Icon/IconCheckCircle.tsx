import * as React from 'react';
import type { SVGProps } from 'react';
const SvgIconCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#14D579"
      stroke="#14D579"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M10 16.666a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="m7.5 10 2.083 1.818 2.917-3.75"
    />
  </svg>
);
export default SvgIconCheckCircle;
