/* eslint-disable react/display-name */
import { ModalFooter as ModalFooterWrapper } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import Button from '../Button/Button';

const ModalFooter = ({ children }: PropsWithChildren) => <ModalFooterWrapper>{children}</ModalFooterWrapper>;

type OneButtonProps = {
  textContent: string;
  handleClick?: React.MouseEventHandler;
};

ModalFooter.OneButton = ({ textContent, handleClick }: OneButtonProps) => {
  return (
    <ModalFooter>
      <Button variant="gray900" size="XL" onClick={handleClick}>
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
        <Button variant="gray200" size="XL" onClick={handleLeftClick}>
          {leftTextContent}
        </Button>
        <Button variant="gray900" size="XL" onClick={handleRightClick}>
          {rightTextContent}
        </Button>
      </div>
    </ModalFooter>
  );
};

export default ModalFooter;
