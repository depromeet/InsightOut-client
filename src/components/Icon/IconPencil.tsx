import { ComponentProps } from 'react';

const IconPencil = ({ ...props }: ComponentProps<'svg'>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none" {...props}>
    <rect className="fill-purple-600" width={7.902} height={9.218} rx={2.491} transform="rotate(42.728 4.138 25.65)" />
    <g filter="url(#a)">
      <path
        className="fill-purple-200"
        d="M14.928 7.87a1.317 1.317 0 0 1 1.86-.074l3.87 3.574c.534.494.568 1.327.074 1.861l-7.547 8.17c-.324.351-.737.607-1.195.741l-2.248.658-3.482-3.217.477-2.293c.097-.467.32-.899.644-1.25l7.547-8.17Z"
      />
    </g>
    <g filter="url(#b)">
      <rect
        width={5.268}
        height={1.317}
        rx={0.658}
        transform="matrix(-.73459 -.67851 -.67851 .73459 19.766 12.338)"
        fill="white"
      />
      <rect
        width={5.174}
        height={1.224}
        x={-0.066}
        y={0.003}
        stroke="white"
        strokeWidth={0.093}
        rx={0.612}
        transform="matrix(-.73459 -.67851 -.67851 .73459 19.653 12.294)"
      />
    </g>
    <path className="fill-purple-600" d="M9.742 22.8 6.26 19.583l-.716 3.436a.658.658 0 0 0 .83.766l3.368-.985Z" />
    <defs>
      <filter
        id="a"
        width={19.803}
        height={20.335}
        x={3.769}
        y={4.956}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={1.245} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1343_10808" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1343_10808" result="shape" />
      </filter>
      <filter
        id="b"
        width={14.181}
        height={13.959}
        x={10.293}
        y={4.055}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2.491} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1343_10808" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1343_10808" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default IconPencil;
