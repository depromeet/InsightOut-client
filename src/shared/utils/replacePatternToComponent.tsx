import { ElementType } from 'react';

/**
 * 정규식 패턴과 일치하는 문자열을 컴포넌트로 변환
 *
 * - usage: 맞춤법 오류인 단어들에 특정 스타일링이 적용된 JSX를 반환합니다
 *
 * @param text 문자열
 * @param pattern 정규식
 *
 * @returns 정규식과 일치하는 문자열들이 Component 컴포넌트로 교체된 값
 */
const replacePatternToComponent = (text: string, pattern: RegExp, Component: ElementType) => {
  const splitText = text.split(pattern);
  const matches = text.match(pattern);

  if (splitText.length <= 1 || !matches) return text;

  return splitText.reduce(
    (arr: (string | JSX.Element)[], element, index) =>
      matches[index]
        ? [...arr, element, <Component key={`${matches[index]}`}>{matches[index]}</Component>]
        : [...arr, element],
    []
  );
};

export default replacePatternToComponent;
