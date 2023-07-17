import { useGetResumes } from '@/hooks/reactQuery/resume/query';
import { ROUTES } from '@/shared/constants/routes';

/**
 * 자기소개서 작성 페이지의 경로를 반환하는 함수
 * @returns 자기소개서 목록 중 가장 첫번째 자기소개서 항목의 경로를 반환합니다.
 */
const getResumeRoute = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: resumeList } = useGetResumes();
  const firstQuestionId = resumeList?.filter(({ questions }) => questions.length)[0]?.questions[0].id;

  return `${ROUTES.RESUMES}/${firstQuestionId}`;
};

export default getResumeRoute;
