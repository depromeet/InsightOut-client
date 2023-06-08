import { ComponentPropsWithRef, PropsWithChildren } from 'react';

import { tw } from '@/shared/utils/tailwindMerge';
import IconPassword from '@/components/Icon/IconPassword';
import Tag from '@/components/Tag/Tag';

import { ErrorMessage } from '../ErrorMessage';
import { TextLengthMessage } from '../TextLengthMessage';

type TextFieldProps = ComponentPropsWithRef<'input'> & {
  mode?: 'default' | 'naming' | 'password' | 'email';
  chipTitle?: string;
  error?: boolean;
  errorMessage?: string;
  emailDomain?: string;
  value?: string;
};

/**
 * @param mode 텍스트 필드의 종류
 * @param error true일 경우에 텍스트 필드가 error 상태로 스타일링됩니다.
 * @param errorMessage error가 true인 경우에 사용. 텍스트 필드 하단에 보이는 메시지
 * @param emailDomain mode="email"인 경우에 사용. 텍스트 필드의 오른쪽에 이메일 도메인 주소가 보입니다 (ex. '@'gmail.com)
 */
const TextField = ({
  mode,
  chipTitle,
  error,
  errorMessage,
  emailDomain,
  value,
  maxLength,
  className,
  ...props
}: TextFieldProps) => {
  return (
    <div>
      {chipTitle && (
        <Tag variant="tertiary" size="s1" className="inline-block mb-2">
          {chipTitle}
        </Tag>
      )}
      <div className="relative">
        <input
          type={mode === 'password' ? 'password' : 'text'}
          value={value}
          maxLength={maxLength}
          className={tw(`form w-full ${error ? 'form-error' : ''}`, className)}
          {...props}
        />
        <RightContent>
          {mode === 'naming' && <TextLengthMessage currentLength={value?.length || 0} maxLength={maxLength || 0} />}
          {mode === 'password' && <IconPassword />}
          {mode === 'email' && <p>{emailDomain}</p>}
        </RightContent>
      </div>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

const RightContent = ({ children }: PropsWithChildren) => {
  return <div className="absolute -translate-y-1/2 right-4 top-1/2">{children}</div>;
};

export default TextField;
