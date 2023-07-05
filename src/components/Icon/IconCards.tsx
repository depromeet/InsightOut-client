import type { SVGProps } from 'react';
const SvgIconCards = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
    <rect
      width={17.685}
      height={12.158}
      x={24.189}
      y={7.146}
      fill="#6356F8"
      rx={2.11}
      transform="rotate(105 24.189 7.146)"
    />
    <path
      stroke="#A49DFB"
      strokeLinecap="round"
      strokeWidth={1.688}
      d="m13.074 14.467 5.338 1.43M12.216 17.67l5.339 1.43"
    />
    <rect
      width={17.685}
      height={12.158}
      x={16.158}
      y={7.315}
      fill="#E8E6FE"
      rx={2.11}
      transform="rotate(90 16.158 7.315)"
    />
    <path stroke="#887EFB" strokeLinecap="round" strokeWidth={1.688} d="M7.315 17.816h5.526M9.527 21.133h3.316" />
  </svg>
);
export default SvgIconCards;
