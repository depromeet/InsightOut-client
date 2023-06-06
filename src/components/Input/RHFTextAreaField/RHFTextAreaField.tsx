'use client';

import { ComponentPropsWithRef } from 'react';

import { tw } from '@/services/utils/tailwindMerge';

import { ErrorMessage } from '../ErrorMessage';
import { TextLengthMessage } from '../TextLengthMessage';
import { FieldValues, Path, RegisterOptions, useFormContext } from 'react-hook-form';

interface TextAreaFieldProps<TFieldValues extends FieldValues = FieldValues> extends ComponentPropsWithRef<'textarea'> {
  showCount?: boolean;
  error?: boolean;
  errorMessage?: string;
  value?: string;

  registerOption?: RegisterOptions<TFieldValues>;
  name?: Path<TFieldValues>;
}

/**
 * @param showCount true일 경우에 글자 수가 보입니다.
 * @param error true일 경우에 텍스트 필드가 error 상태로 스타일링됩니다.
 * @param errorMessage error가 true인 경우에 사용. 텍스트 필드 하단에 보이는 메시지
 *
 * react-hook-form의 useFormContext가 주입된 TextAreaField
 */
const RHFTextAreaField = <TFieldValues extends FieldValues>({
  showCount,
  value,
  maxLength,
  error,
  errorMessage,
  className,
  registerOption,
  name,
  ...props
}: TextAreaFieldProps<TFieldValues>) => {
  const { register } = useFormContext<TFieldValues>();
  return (
    <>
      <textarea
        value={value}
        maxLength={maxLength}
        cols={3}
        className={tw(
          `form h-[56px] max-h-[118px] resize-none ${value ? 'form-typed' : ''} ${error ? 'form-error' : ''}`,
          className
        )}
        {...(!!name && register(name, { ...registerOption }))}
        {...props}
      />
      {showCount && (
        <TextLengthMessage className="float-right mt-2" currentLength={value?.length || 0} maxLength={maxLength || 0} />
      )}
      {error && !value && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default RHFTextAreaField;
