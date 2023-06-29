import Tag from '@/components/Tag/Tag';

type ExperienceCardProps = {
  selected?: boolean;
  date: string;
  title: string;
  summaryKeywords: string[];
};

const ExperienceCard = ({ selected, date, title, summaryKeywords }: ExperienceCardProps) => {
  return (
    <article
      className={`px-[22px] py-[18px] rounded-[20px] shadow-insightCard bg-white ${
        selected ? 'border-[2px] border-primary-300' : ''
      }`}>
      <p className="mb-[2px] c2 text-gray-600">{date}</p>
      <h3 className="mb-[12px] subhead2 text-gray-800 w-[268px] text-ellipsis overflow-hidden whitespace-nowrap">
        {title}
      </h3>
      <ul className="flex gap-[10px]">
        {summaryKeywords.map((keyword) => (
          <li key={keyword}>
            <Tag variant="primary50" size="M">
              {keyword}
            </Tag>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCard;
