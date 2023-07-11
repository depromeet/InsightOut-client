import React, { PropsWithChildren } from 'react';

interface QuestionCardProps {
  children: React.ReactElement;
  title: string | React.ReactElement;
  subTitle?: string;
}

const QuestionCard = ({ children, title, subTitle }: QuestionCardProps) => {
  return (
    <QuestionCard.Container>
      <div className="mb-[40px]">
        <div className="text-center h5 text-main">{title}</div>
        <div className="mt-[4px] text-center b3 text-sub">{subTitle}</div>
      </div>
      {children}
    </QuestionCard.Container>
  );
};

export default QuestionCard;

QuestionCard.Container = function Container({ children }: PropsWithChildren) {
  return <div className="experience py-[54px] px-[48.5px] mb-[32px]">{children}</div>;
};
