import React from 'react';

const RecommendKeyword = ({ keywordList }: { keywordList: string[] }) => {
  if (keywordList.length === 1) return <span className="text-secondary-500">{keywordList[0]}</span>;
  return (
    <span>
      <span className="text-secondary-500">{keywordList[0]}</span>과&nbsp;
      <span className="text-secondary-500">{keywordList[1]}</span>
    </span>
  );
};

export default RecommendKeyword;
