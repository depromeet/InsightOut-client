import { useRouter } from 'next/navigation';

import { useUpdateOnboarding } from '@/hooks/reactQuery/onboarding/mutation';
import { useCreateResume } from '@/hooks/reactQuery/resume/mutation';
import { useCreateQuestion } from '@/hooks/reactQuery/resume/question/mutation';
import { useUserActions, useUserOnboarding } from '@/shared/store/user';

import NotFound from './NotFound';

const NotFoundResume = () => {
  const { push } = useRouter();

  const { resume: isResumeOnboardingComplete, ...restOnboardings } = useUserOnboarding();
  const { setUserInfo } = useUserActions();

  const { mutate: updateResumeOnboarding } = useUpdateOnboarding({
    onSuccess: () => setUserInfo({ onboarding: { ...restOnboardings, resume: true } }),
  });
  const { mutate: createQuestion } = useCreateQuestion({
    onSuccess: ({ id: questionId }) => {
      push(`/resumes/${questionId}`);
    },
  });
  const { mutate: createResume } = useCreateResume({
    onSuccess: ({ id: resumeId }) => {
      createQuestion(resumeId);
    },
  });

  /**
   * 자기소개서 추가하기 버튼 클릭 시
   * 1. resume 생성
   * 2. resume에 question 생성
   * 3. 생성된 questionId로 이동: /resumes/${questionId}
   * 4. 온보딩하지 않았을 경우, 온보딩 값 업데이트
   */
  const handleAddResumeButtonClick = () => {
    createResume();
    if (!isResumeOnboardingComplete) updateResumeOnboarding({ resume: true });
  };

  return (
    <NotFound
      title="앗! 아직 작성한 자기소개서가 없어요"
      description="시작이 반이에요. 자기소개서를 추가해보세요!"
      buttonText="자기소개서 추가하기"
      onButtonClick={handleAddResumeButtonClick}
    />
  );
};

export default NotFoundResume;
