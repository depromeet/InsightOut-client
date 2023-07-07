import Image from 'next/image';

type AnalyzeCardProps = {
  index: number;
  title: string;
};

const AnalyzeCard = ({ index, title }: AnalyzeCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[8px]">
      <Image
        src={`/images/home/img-home-experience-${index}.png`}
        className="w-[80px] h-[80px]"
        width={80}
        height={80}
        alt={`home-experience-${index}`}
      />
      <span className="text-[14px] font-medium leading-[150%] text-center">
        <span className="font-extrabold mr-[4px]">0{index}</span>
        {title}
      </span>
    </div>
  );
};

export default AnalyzeCard;
