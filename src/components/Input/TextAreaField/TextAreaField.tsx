import { ComponentPropsWithRef } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { TextLengthMessage } from '../TextLengthMessage';

type TextAreaFieldProps = ComponentPropsWithRef<'textarea'> & {
  showCount?: boolean;
  error?: boolean;
  errorMessage?: string;
  value?: string;
};

const TextAreaField = ({ showCount, value, maxLength, error, errorMessage, ...props }: TextAreaFieldProps) => {
  return (
    <div className="relative">
      <textarea
        value={value}
        maxLength={maxLength}
        className={`form resize-none ${value ? 'form-typed' : ''} ${error ? 'form-error' : ''}`}
        {...props}
      />
      {showCount && <TextLengthMessage currentLength={value?.length || 0} maxLength={maxLength || 0} />}
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextAreaField;
