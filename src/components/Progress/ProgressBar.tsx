'use client';

import React from 'react';

const ProgressBar = ({ progress }: { progress: number }) => {
  const style = {
    width: `${progress}%`,
  };

  return (
    <div className="bg-gray-100 w-[100%] h-[8px] rounded-[24px]">
      <div
        className={`bg-primary-300 h-[8px] rounded-[24px] transition-[width] ease-in-out duration-300`}
        style={style}
      />
    </div>
  );
};

export default ProgressBar;
