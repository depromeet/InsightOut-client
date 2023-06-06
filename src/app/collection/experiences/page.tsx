import Badge from '@/components/Badge/Badge';
import Chip from '@/components/Chip/Chip';

const Page = () => {
  const capabilities = [
    {
      id: 123,
      title: '팀워크',
      count: 4,
    },
    {
      id: 124,
      title: '리더십',
      count: 10,
    },
    {
      id: 125,
      title: '분석능력',
      count: 5,
    },
    {
      id: 126,
      title: '설득력',
      count: 7,
    },
    {
      id: 127,
      title: '책임감',
      count: 13,
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-[8px] mt-[24px]">
        {capabilities.map(({ id, title, count }) => (
          <Chip
            key={id}
            size="md"
            variant="secondary"
            badge={
              <Badge style="tertiary" size="sm">
                {count}
              </Badge>
            }>
            {title}
          </Chip>
        ))}
      </div>
      <div className="mt-[24px]">contents</div>
    </>
  );
};

export default Page;
