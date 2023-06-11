'use client';

import React, { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

import { ErrorMessage } from '../ErrorMessage';
import { TextLengthMessage } from '../TextLengthMessage';
import { FieldValues, Path, RegisterOptions, useFormContext } from 'react-hook-form';
import { useForwardRef } from '@/hooks/useForwardRef';
import Tag from '@/components/Tag/Tag';
import { resizeHeight } from '@/shared/utils/autoSizeTextarea';
import { tw } from '@/shared/utils/tailwindMerge';

interface TextAreaFieldProps<TFieldValues extends FieldValues = FieldValues> extends ComponentPropsWithRef<'textarea'> {
  chipTitle?: string;
  error?: boolean;
  errorMessage?: string;
  value?: string;
  autoSize?: boolean;

  registerOption?: RegisterOptions<TFieldValues>;
  name: Path<TFieldValues>;
}

/**
 * @param error true일 경우에 텍스트 필드가 error 상태로 스타일링됩니다.
 * @param errorMessage error가 true인 경우에 사용. 텍스트 필드 하단에 보이는 메시지
 *
 * react-hook-form의 useFormContext가 주입된 TextAreaField
 */
const RHFTextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(function RHFTextAreaField<
  TFieldValues extends FieldValues
>(
  {
    chipTitle,
    value,
    maxLength,
    error,
    errorMessage,
    className,
    autoSize = false,
    registerOption,
    name,
    ...props
  }: TextAreaFieldProps<TFieldValues>,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  const forwardRef = useForwardRef<HTMLTextAreaElement>(ref);
  const { register } = useFormContext<TFieldValues>();

  const handleTextareaChange = () => autoSize && resizeHeight(forwardRef);
  return (
    <>
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
        {...(!!name && register(name, { ...registerOption }))}
        {...props}
      />
      {maxLength && (
        <TextLengthMessage className="float-right mt-2" currentLength={value?.length || 0} maxLength={maxLength || 0} />
      )}
      {error && !value && <ErrorMessage hasIcon>{errorMessage}</ErrorMessage>}
    </>
  );
});

const TextAreaFieldWithGeneric = RHFTextAreaField as <TFieldValues extends FieldValues = FieldValues>(
  props: TextAreaFieldProps<TFieldValues> & React.RefAttributes<HTMLTextAreaElement>
) => ReturnType<typeof RHFTextAreaField>;

export default TextAreaFieldWithGeneric as typeof TextAreaFieldWithGeneric;
