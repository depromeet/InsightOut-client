import { ComponentPropsWithRef, forwardRef } from 'react';

import { tw } from '@/services/utils/tailwindMerge';
import { useForwardRef } from '@/hooks/useForwardRef';
// import { useAutoSizeTextArea } from '@/hooks/useAutoSizeTextArea';
import { resizeHeight } from '@/services/utils/autoSizeTextarea';
import Tag from '@/components/Tag/Tag';

import { ErrorMessage } from '../ErrorMessage';
import { TextLengthMessage } from '../TextLengthMessage';

type TextAreaFieldProps = ComponentPropsWithRef<'textarea'> & {
  chipTitle?: string;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  autoSize?: boolean;
};

/**
 * @param error true일 경우에 텍스트 필드가 error 상태로 스타일링됩니다.
 * @param errorMessage error가 true인 경우에 사용. 텍스트 필드 하단에 보이는 메시지
 */
const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ chipTitle, value, maxLength, error, errorMessage, className, autoSize = false, ...props }, ref) => {
    const forwardRef = useForwardRef<HTMLTextAreaElement>(ref);

    /** 1. useAutoSizeTextArea 커스텀 훅 */
    // const textareaRef = useAutoSizeTextArea({ value, autoSize }, forwardRef);

    /** 2. resizeHeight */
    const handleTextareaChange = () => autoSize && resizeHeight(forwardRef);

    return (
      <div>
        {chipTitle && (
          <Tag variant="tertiary" size="s1" className="inline-block mb-2">
            {chipTitle}
          </Tag>
        )}
        <textarea
          ref={forwardRef}
          value={value}
          maxLength={maxLength}
          className={tw(`form resize-none ${error ? 'form-error' : ''}`, className)}
          onChange={handleTextareaChange}
          {...props}
        />
        {maxLength && (
          <TextLengthMessage
            className="float-right mt-2"
            currentLength={value?.length || 0}
            maxLength={maxLength || 0}
          />
        )}
        {error && !value && <ErrorMessage hasIcon>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);

TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;
