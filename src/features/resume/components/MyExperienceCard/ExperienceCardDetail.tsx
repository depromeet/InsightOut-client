import Badge from '@/components/Badge/Badge';

// FIXME: GET /experience/star/{experienceId}
const demoResponse = {
  id: 1234,
  title: '디프만 12기 백엔드 파트장',
  situation: '코딩에 관심이 생겼고, 디자이너와 협업이 하고 싶었음',
  task: '백엔드 파트장으로서 팀을 이끌어야 했고, 소셜 로그인 API를 모두 구현해야 했음',
  action: '모든 API 명세를 읽어보았고, 어떻게 소셜 로그인 제공자 서버와 통신하는지 공부함',
  result: '미친 성장을 할 수 있었다.',
};

const BADGE_CONTENT = {
  situation: '이런 상황이었어요',
  task: '이런 문제가 있었어요',
  action: '이렇게 해결했어요',
  result: '결과는 이랬어요',
} as const;

const ExperienceCardDetail = () => {
  const { title, situation, task, action, result } = demoResponse;
  const star = { situation, task, action, result };

  return (
    <article className="w-[330px] py-[22px] px-[24px]">
      <h3 className="subhead2 mb-[16px]">{title}</h3>
      <ul>
        {(Object.entries(star) as Entries<typeof star>).map(([key, value]) => (
          <li key={key} className="mb-[16px]">
            <Badge variant="gray100-outline" size="S" className="!inline-block !mb-[8px]">
              {BADGE_CONTENT[key]}
            </Badge>
            <p className="b4">{value}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ExperienceCardDetail;
