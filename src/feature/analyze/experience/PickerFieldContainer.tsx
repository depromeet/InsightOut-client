import React, { ReactElement } from 'react';
import Tag from '@/components/Tag/Tag';

/**
 * 특정 데이터의 값들이 지정되어 사용자가 설정할 수 있도록 돕는 필드입니다. 주로 날짜,시간 같은 정보들이 포함되어 있습니다.
 */
const PickerFieldContainer = ({ children }: StrictPropsWithChildren) => {
  return (
    <div className="mt-[40px]">
      <Tag variant="gray100" size="S" className="inline-block mb-2">
        기간
      </Tag>
      <div className="flex items-center [&>div:nth-of-type(odd)_input]:w-[73px] [&>div:nth-of-type(odd)_input]:mr-[10px] [&>div:nth-of-type(even)_input]:w-[60px]">
        {children.map((child: ReactElement, i: number) => {
          if (i === 1) {
            return (
              <React.Fragment key={`period_${i}`}>
                {child}
                <span key={`period_${i}`} className="mx-[24px] text-gray-500 b3">
                  ~
                </span>
              </React.Fragment>
            );
          }
          return <React.Fragment key={`period_${i}`}>{child}</React.Fragment>;
        })}
      </div>
    </div>
  );
};

export default PickerFieldContainer;
