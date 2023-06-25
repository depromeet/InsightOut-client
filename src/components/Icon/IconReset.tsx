import * as React from 'react';
import type { SVGProps } from 'react';
const SvgReset = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} fill="none" {...props}>
    <path
      stroke="#6356F8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M18.362 7.372c-.276-.495-.608-.84-.986-1.255a7.333 7.333 0 1 0 .978 8.524"
    />
    <path
      stroke="#6356F8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="m14.695 7.382 3.667-.01-.01-3.667"
    />
  </svg>
);
export default SvgReset;
