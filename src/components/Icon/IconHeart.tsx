import { ComponentProps } from 'react';

type IconHeartProps = ComponentProps<'svg'>;

const IconHeart = ({ ...props }: IconHeartProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        className="fill-main"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.2571 5.23837C18.2771 3.25837 15.0686 3.25837 13.0886 5.23837L11.9981 6.32887L10.9046 5.23387C8.92461 3.25538 5.71461 3.25538 3.73461 5.23387C1.75611 7.21387 1.75611 10.4239 3.73461 12.4024L4.82961 13.4974L4.82811 13.4989L11.9981 20.6674L20.2571 12.4069C22.2371 10.4284 22.2371 7.21687 20.2571 5.23837Z"
      />
    </svg>
  );
};

export default IconHeart;
