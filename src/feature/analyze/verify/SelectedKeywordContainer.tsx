import React from 'react';

import Tag from '@/components/Tag/Tag';

const SelectedKeywordContainer = ({ children }: StrictPropsWithChildren) => {
  return (
    <div className="flex flex-col mt-[56px]">
      <Tag variant="gray100" size="S" className="inline-block mb-2">
        내가 선택한 경험 역량 키워드
      </Tag>
      <div className="flex gap-[8px]">{children}</div>
    </div>
  );
};

export default SelectedKeywordContainer;
