import { SpellCheckResponse } from '@/apis/resume/types/spellCheck';

/**
 * 서버 응답 변형해서 사용하기 위한 함수
 * - 외부 맞춤법 API 사용으로 인해 백엔드에서 응답 수정이 불가능하다고 합니다.
 * - https://github.com/depromeet/InsightOut-client/issues/92 참고
 *
 * @param response 서버에서 보내주는 response
 */
const formatSpellCheckResponse = (response: SpellCheckResponse) => {
  return response.flat().map(({ token, suggestions, context }, index) => ({
    id: index,
    error: token,
    correct: suggestions[0],
    errorContext: context,
  }));
};

export default formatSpellCheckResponse;
