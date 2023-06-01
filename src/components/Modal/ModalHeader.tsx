/* eslint-disable react/display-name */
import { ModalHeader as ModalHeaderWrapper } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const ModalHeader = ({ children }: PropsWithChildren) => <ModalHeaderWrapper>{children}</ModalHeaderWrapper>;

type TiTleProps = {
  title: string;
  subTitle?: string;
};

ModalHeader.Title = ({ title, subTitle }: TiTleProps) => {
  return (
    <ModalHeader>
      <h5 className="h5 tex">{title}</h5>
      <p className="b1">{subTitle}</p>
    </ModalHeader>
  );
};

export default ModalHeader;
