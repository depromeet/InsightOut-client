'use client';

import React from 'react';

const ProgressBar = ({ progress }: { progress: number }) => {
  const style = {
    transform: `translate(-${100 - progress}%)`,
  };

  return (
    <div className="bg-gray-100 w-[100%] h-[8px] rounded-[24px] overflow-hidden">
      <div
        className={`bg-primary-300 h-[8px] rounded-[24px] transition-[transform] ease-in-out duration-300`}
        style={style}
      />
    </div>
  );
};

export default ProgressBar;
