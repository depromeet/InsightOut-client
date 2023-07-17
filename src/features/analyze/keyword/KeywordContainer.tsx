import React from 'react';

const KeywordContainer = ({ children }: StrictPropsWithChildren) => {
  return <div className="flex flex-center flex-row flex-wrap gap-[16px] mb-[40px]">{children}</div>;
};

export default KeywordContainer;
