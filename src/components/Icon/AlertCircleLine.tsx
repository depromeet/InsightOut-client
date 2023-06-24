import * as React from 'react';
import { SVGProps } from 'react';
const SvgAlertCircleLine = (props: SVGProps<SVGSVGElement>) => (
  <svg width={21} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10.5 16.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334ZM10.5 12.667h.007M10.5 7.333V10"
      stroke="#525463"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgAlertCircleLine;
