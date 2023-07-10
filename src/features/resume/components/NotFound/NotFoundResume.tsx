import { useRouter } from 'next/navigation';

import { useUpdateOnboarding } from '@/hooks/reactQuery/onboarding/mutation';
import { useCreateResume } from '@/hooks/reactQuery/resume/mutation';
import { useCreateQuestion } from '@/hooks/reactQuery/resume/question/mutation';
import { useUserActions, useUserOnboarding } from '@/shared/store/user';

import NotFound from './NotFound';

const NotFoundResume = () => {
  const { push } = useRouter();

  const { resume: isResumeOnboardingComplete } = useUserOnboarding();
  const { setUserInfo } = useUserActions();

  const { mutateAsync: updateResumeOnboarding } = useUpdateOnboarding();
  const { mutateAsync: createQuestion } = useCreateQuestion();
  const { mutateAsync: createResume } = useCreateResume();

  /**
   * 자기소개서 추가하기 버튼 클릭 시
   * 1. resume 생성
   * 2. resume에 question 생성
   * 3. 생성된 questionId로 이동: /resumes/${questionId}
   * 4. 온보딩하지 않았을 경우, 온보딩 값 업데이트
   */
  const handleAddResumeButtonClick = async () => {
    const { id: resumeId } = await createResume();
    const { id: questionId } = await createQuestion(resumeId);

    push(`/resumes/${questionId}`);

    if (!isResumeOnboardingComplete) {
      const onboarding = await updateResumeOnboarding({ resume: true });
      setUserInfo({ onboarding });
    }
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
