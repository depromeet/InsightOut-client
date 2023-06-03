'use client';
import React from 'react';

interface QuestionCardProps {
  children: React.ReactElement;
  title: string | React.ReactElement;
  subTitle?: string;
}

const QuestionCard = ({ children, title, subTitle }: QuestionCardProps) => {
  return (
    <div className="experience py-[54px] px-[48.5px] mb-[32px]">
      <div className="mb-[40px]">
        <p className="text-center h5 text-main">{title}</p>
        <p className="mt-[4px] text-center b3 text-sub">{subTitle}</p>
      </div>
      {children}
    </div>
  );
};

export default QuestionCard;
