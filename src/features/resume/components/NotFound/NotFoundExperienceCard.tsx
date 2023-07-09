import { useRouter } from 'next/navigation';

import { ROUTES } from '@/shared/constants/routes';

import NotFound from './NotFound';

const NotFoundExperienceCard = () => {
  const { push } = useRouter();

  return (
    <NotFound
      title="앗! 아직 작성한 경험카드가 없어요"
      description="경험분해부터 시작해볼까요?"
      buttonText="경험분해 시작하기"
      onClick={() => push(ROUTES.EXPERIENCE)}
    />
  );
};

export default NotFoundExperienceCard;
