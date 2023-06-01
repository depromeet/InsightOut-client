/* eslint-disable react/display-name */
import { ModalFooter as ModalFooterWrapper } from '@chakra-ui/react';
import Button from '../Button/Button';
import { PropsWithChildren } from 'react';

const ModalFooter = ({ children }: PropsWithChildren) => <ModalFooterWrapper>{children}</ModalFooterWrapper>;

type OneButtonProps = {
  textContent: string;
  handleClick?: React.MouseEventHandler;
};

ModalFooter.OneButton = ({ textContent, handleClick }: OneButtonProps) => {
  return (
    <ModalFooter>
      <Button variant="primary" size="xl" onClick={handleClick}>
        {textContent}
      </Button>
    </ModalFooter>
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
    <ModalFooter>
      <div className="flex flex-row gap-3">
        <Button variant="tertiary" size="xl" onClick={handleLeftClick}>
          {leftTextContent}
        </Button>
        <Button variant="primary" size="xl" onClick={handleRightClick}>
          {rightTextContent}
        </Button>
      </div>
    </ModalFooter>
  );
};

export default ModalFooter;
