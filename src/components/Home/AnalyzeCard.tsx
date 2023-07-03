import { ReactElement } from 'react';

type AnalyzeCardProps = {
  image: ReactElement<SVGAElement>;
  index: number;
  title: string;
};

const AnalyzeCard = ({ image, index, title }: AnalyzeCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[8px]">
      {image}
      <span className="text-[14px] font-medium leading-[150%] text-center">
        <span className="font-extrabold mr-[4px]">0{index}</span>
        {title}
      </span>
    </div>
  );
};

export default AnalyzeCard;
