import { ComponentPropsWithRef } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

import { ErrorMessage } from '../ErrorMessage';
import { TextLengthMessage } from '../TextLengthMessage';

type TextAreaFieldProps = ComponentPropsWithRef<'textarea'> & {
  showCount?: boolean;
  error?: boolean;
  errorMessage?: string;
  value?: string;
};

/**
 * @param showCount true일 경우에 글자 수가 보입니다.
 * @param error true일 경우에 텍스트 필드가 error 상태로 스타일링됩니다.
 * @param errorMessage error가 true인 경우에 사용. 텍스트 필드 하단에 보이는 메시지
 */
const TextAreaField = ({
  showCount,
  value,
  maxLength,
  error,
  errorMessage,
  className,
  ...props
}: TextAreaFieldProps) => {
  return (
    <div>
      <textarea
        value={value}
        maxLength={maxLength}
        className={tw(`form resize-none ${value ? 'form-typed' : ''} ${error ? 'form-error' : ''}`, className)}
        {...props}
      />
      {showCount && (
        <TextLengthMessage className="float-right mt-2" currentLength={value?.length || 0} maxLength={maxLength || 0} />
      )}
      {error && !value && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default TextAreaField;
