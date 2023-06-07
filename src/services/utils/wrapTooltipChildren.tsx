import React from 'react';

/**
 * @name wrapTooltipChildren
 * @description 문자열이 15자를 초과할 경우 줄바꿈으로 감싸는 함수
 *
 * @param {string} children - 감싸고자 하는 입력 문자열
 * @returns {string | JSX.Element[]} - 줄바꿈이 적용된 문자열 또는 원본 문자열
 */
const wrapTooltipChildren = (children: string): string | JSX.Element[] => {
  const shouldWrapChildren = children.length > 15;
  const matches = children.match(/.{1,15}/g);

  if (shouldWrapChildren && matches) {
    return matches.map((substring, index) => (
      <React.Fragment key={index}>
        {substring}
        <br />
      </React.Fragment>
    ));
  }

  return children;
};

export default wrapTooltipChildren;
