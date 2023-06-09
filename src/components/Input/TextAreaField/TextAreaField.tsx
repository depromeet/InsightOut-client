import { ComponentPropsWithRef, forwardRef, useEffect } from 'react';

import Tag from '@/components/Tag/Tag';
import { useForwardRef } from '@/hooks/useForwardRef';
import { resizeHeight } from '@/shared/utils/autoSizeTextarea';
import { tw } from '@/shared/utils/tailwindMerge';

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

    const handleTextareaChange = () => autoSize && resizeHeight(forwardRef);

    useEffect(() => {
      // 마운트 됐을 때 defaultValue만큼 resize 해주기 위함
      if (autoSize) {
        resizeHeight(forwardRef);
      }
    }, []);

    return (
      <div>
        {chipTitle && (
          <Tag variant="gray100" size="S" className="inline-block mb-2">
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
          <TextLengthMessage className="float-right" currentLength={value?.length || 0} maxLength={maxLength || 0} />
        )}
        {error && !value && <ErrorMessage hasIcon>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);

TextAreaField.displayName = 'TextAreaField';

export default TextAreaField;
