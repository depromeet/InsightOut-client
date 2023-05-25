import { ControllerRenderProps, ControllerFieldState } from 'react-hook-form';

import { FormControl, FormErrorMessage, Textarea } from '@chakra-ui/react';
import TextLengthMessage from '../TextLengthMessage';

type TextAreaFieldProps = Component<'textarea'> & {
  withTextLengthMessage?: boolean;
} & Omit<ControllerRenderProps, 'ref'> &
  ControllerFieldState;

/**
 * 1. withTextLengthMessage에 따라 글자 수를 보여줍니다.
 * 2. invalid하면 FormErrorMessage를 보여줍니다.
 *
 * @param withTextLenthMessage 글자 수를 보여줄지를 boolean으로 설정
 * @param fieldState react-hook-form에서 입력에 대해 제공하는 값 (invalid, error, isDirty, isTouched)
 */

const TextAreaField = ({
  withTextLengthMessage,
  value,
  error,
  invalid,
  isDirty,
  isTouched,
  ...textareaProps
}: TextAreaFieldProps) => (
  <FormControl isInvalid={invalid}>
    <Textarea resize="none" {...textareaProps} />
    <div>
      <FormErrorMessage display={'inline-block'}>{error?.message}</FormErrorMessage>
      {withTextLengthMessage && (
        <TextLengthMessage currentLength={value?.length} maxLength={textareaProps?.maxLength || 0} />
      )}
    </div>
  </FormControl>
);

export default TextAreaField;
