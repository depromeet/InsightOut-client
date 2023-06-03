import React from 'react';

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
