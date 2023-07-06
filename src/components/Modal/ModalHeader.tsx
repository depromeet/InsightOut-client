/* eslint-disable react/display-name */
import { PropsWithChildren } from 'react';

import { ModalHeader as ModalHeaderWrapper } from '@chakra-ui/react';

type ModalHeaderProps = { className?: string } & PropsWithChildren;

const ModalHeader = ({ className, children }: ModalHeaderProps) => (
  <ModalHeaderWrapper className={className}>{children}</ModalHeaderWrapper>
);

type TitleProps = {
  title: string;
  subTitle?: string;
};

ModalHeader.Title = ({ title, subTitle }: TitleProps) => {
  return (
    <ModalHeader>
      <h5 className="whitespace-pre h5 tex">{title}</h5>
      <p className="b1">{subTitle}</p>
    </ModalHeader>
  );
};

export default ModalHeader;
