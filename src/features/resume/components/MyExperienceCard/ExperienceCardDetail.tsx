'use client';

import Badge from '@/components/Badge/Badge';
import { useGetExperience } from '@/hooks/reactQuery/analyze/query';

import { useExperienceId } from '../../store';

const BADGE_CONTENT = {
  situation: '이런 상황이었어요',
  task: '이런 문제가 있었어요',
  action: '이렇게 해결했어요',
  result: '결과는 이랬어요',
} as const;

const ExperienceCardDetail = () => {
  const experienceId = useExperienceId();
  const { data: experience } = useGetExperience({ experienceId }, { enabled: !!experienceId });

  const { title, situation, task, action, result } = experience ?? {
    title: '',
    situation: '',
    task: '',
    action: '',
    result: '',
  };
  const star = { situation, task, action, result };

  if (!experience) return null;

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
