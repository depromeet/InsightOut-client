/* eslint-disable react/display-name */
import { ModalFooter as ModalFooterWrapper } from '@chakra-ui/react';
import Button from '../Button/Button';

const ModalFooter = () => <ModalFooterWrapper />;

type OneButtonProps = {
  textContent: string;
  handleClick?: React.MouseEventHandler;
};

ModalFooter.OneButton = ({ textContent, handleClick }: OneButtonProps) => {
  return (
    <Button variant="primary" size="xl" onClick={handleClick}>
      {textContent}
    </Button>
  );
};

type TwoButtonProps = {
  leftTextContent: string;
  handleLeftClick?: React.MouseEventHandler;
  rightTextContent: string;
  handleRightClick?: React.MouseEventHandler;
};

ModalFooter.TwoButton = ({ leftTextContent, handleLeftClick, rightTextContent, handleRightClick }: TwoButtonProps) => {
  return (
    <div className="flex flex-row gap-3 my-10">
      <Button variant="tertiary" size="xl" onClick={handleLeftClick}>
        {leftTextContent}
      </Button>
      <Button variant="primary" size="xl" onClick={handleRightClick}>
        {rightTextContent}
      </Button>
    </div>
  );
};

export default ModalFooter;
