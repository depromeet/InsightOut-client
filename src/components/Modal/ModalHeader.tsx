/* eslint-disable react/display-name */
import { ModalHeader as ModalHeaderWrapper } from '@chakra-ui/react';

const ModalHeader = () => <ModalHeaderWrapper />;

type TiTleProps = {
  title: string;
  subTitle?: string;
};

ModalHeader.Title = ({ title, subTitle }: TiTleProps) => {
  return (
    <>
      <h5 className="h5">{title}</h5>
      <p className="b1">{subTitle}</p>
    </>
  );
};

export default ModalHeader;
