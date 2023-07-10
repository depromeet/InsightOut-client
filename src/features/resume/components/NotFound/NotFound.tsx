import { ComponentProps } from 'react';

import Image from 'next/image';
import lumosNocard from 'public/images/lumos-nocard.png';

import Button from '@/components/Button/Button';
import { tw } from '@/shared/utils/tailwindMerge';

type NotFoundProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
} & ComponentProps<'div'>;

const NotFound = ({ title, description, buttonText, onButtonClick, className, ...props }: NotFoundProps) => {
  return (
    <div className={tw('flex flex-col items-center justify-center w-[100%] h-[100%]', className)} {...props}>
      <Image src={lumosNocard} alt="noCard" width={225} priority />
      <p className="subhead2 text-sub">{title}</p>
      <p className="b1 text-light mb-[28px]">{description}</p>
      <Button variant="secondary" size="XL" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default NotFound;
