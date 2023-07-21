import React from 'react';

import { CapabilitiesType } from '../types';

const RecommendKeyword = ({ keywordList }: { keywordList: CapabilitiesType[] }) => {
  if (keywordList.length === 1) return <span className="text-secondary-500">{keywordList?.[0]?.keyword}</span>;
  return (
    <span>
      <span className="text-secondary-500">{keywordList?.[0]?.keyword}</span>과&nbsp;
      <span className="text-secondary-500">{keywordList?.[1]?.keyword}</span>
    </span>
  );
};

export default RecommendKeyword;
