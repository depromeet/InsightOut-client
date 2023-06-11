import React, { ReactElement } from 'react';
import Tag from '@/components/Tag/Tag';

const PeriodContainer = ({ children }: StrictPropsWithChildren) => {
  return (
    <div className="mt-[40px]">
      <Tag variant="tertiary" size="s1" className="inline-block mb-2">
        기간
      </Tag>
      <div className="flex items-center [&>div:nth-of-type(odd)_input]:w-[73px] [&>div:nth-of-type(odd)_input]:mr-[10px] [&>div:nth-of-type(even)_input]:w-[60px]">
        {children.map((child: ReactElement, i: number) => {
          if (i === 1) {
            return (
              <>
                {child}
                <span className="mx-[24px] text-gray-500 b3">~</span>
              </>
            );
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default PeriodContainer;
