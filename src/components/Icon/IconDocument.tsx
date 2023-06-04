import { tw } from '@/services/utils/tailwindMerge';
import { ComponentProps } from 'react';

const IconDocument = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    className={tw('stroke-current', className)}
    fill="none"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11.9908 2.53348C11.7836 2.33346 11.5069 2.22168 11.219 2.22168H5.00076C4.5587 2.22168 4.13475 2.39123 3.82217 2.69303C3.50959 2.99484 3.33398 3.40417 3.33398 3.83098L3.33398 16.169C3.33398 16.5958 3.50959 17.0051 3.82217 17.3069C4.13475 17.6087 4.5587 17.7783 5.00076 17.7783H15.0014C15.4435 17.7783 15.8674 17.6087 16.18 17.3069C16.4926 17.0051 16.6682 16.5958 16.6682 16.169V7.52131C16.6682 7.21985 16.5457 6.93132 16.3288 6.72193L11.9908 2.53348Z"
      strokeWidth="1.83346"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13.3351 14.0234H6.66797" strokeWidth="1.7316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.3351 10.8047H6.66797" strokeWidth="1.7316" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.7598 2.36035V6.94399H16.5026" strokeWidth="1.83346" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default IconDocument;
