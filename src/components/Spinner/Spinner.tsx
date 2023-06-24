import { SPINNER_SIZE, SPINNER_STYLE } from '@/shared/constants/spinner';
import { Spinner as ChakraSpinner } from '@chakra-ui/react';

type SpinnerProps = MergeComponentProps<
  'div',
  {
    /** 스피너 크기 (S, M, L) */
    size: SpinnerSize;
    /** 스피너 스타일 (primary500, secondary500) */
    style: SpinnerStyle;
  }
>;

const Spinner = ({ size, style, ...props }: SpinnerProps) => {
  const spinnerSize = SPINNER_SIZE[size];
  const spinnerStyle = SPINNER_STYLE[style];

  return <ChakraSpinner {...spinnerSize} color={spinnerStyle} thickness="3px" {...props} />;
};

export default Spinner;
