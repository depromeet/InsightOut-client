import { ComponentProps } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

const IconFolder = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-current', className)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M20.4004 18.0121C20.4004 18.4895 20.2108 18.9473 19.8732 19.2849C19.5355 19.6224 19.0778 19.8121 18.6003 19.8121H5.39971C4.92224 19.8121 4.46447 19.6224 4.12685 19.2849C3.78922 18.9473 3.59961 18.4895 3.59961 18.0121V5.74726C3.59961 5.26988 3.78922 4.81204 4.12685 4.47447C4.46447 4.13691 4.92224 3.94727 5.39971 3.94727L10.6846 3.94727C11.0858 3.94727 11.4605 4.14778 11.683 4.48161L12.7706 6.11292C12.9932 6.44675 13.3679 6.64726 13.7691 6.64726H18.6003C19.0778 6.64726 19.5355 6.83691 19.8732 7.17447C20.2108 7.51204 20.4004 7.96987 20.4004 8.44726V18.0121Z"
      strokeWidth="1.98005"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconFolder;
