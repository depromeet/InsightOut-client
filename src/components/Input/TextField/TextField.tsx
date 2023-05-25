import { ControllerRenderProps, ControllerFieldState } from 'react-hook-form';

import { FormControl, FormErrorMessage, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

type TextFieldProps = {
  rightContent?: React.ReactNode;
} & Omit<Component<'input'>, 'size'> &
  Omit<ControllerRenderProps, 'ref'> &
  ControllerFieldState;

const TextField = ({ rightContent, error, invalid, isTouched, isDirty, ...inputProps }: TextFieldProps) => (
  <FormControl isInvalid={invalid}>
    <InputGroup>
      <Input {...inputProps} />
      {rightContent && (
        <InputRightElement width="max" mr="4">
          {rightContent}
        </InputRightElement>
      )}
    </InputGroup>
    {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
  </FormControl>
);

export default TextField;
