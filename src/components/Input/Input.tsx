import { ComponentPropsWithRef, PropsWithChildren } from 'react';

type InputProps = ComponentPropsWithRef<'input'> & {
  isTyped?: boolean;
  error?: boolean;
};

type TextareaProps = ComponentPropsWithRef<'textarea'> & {
  isTyped?: boolean;
  error?: boolean;
};

type InputRightContentProps = PropsWithChildren & { children: React.ReactNode };

type TextLengthMessageProps = {
  className?: string;
  currentLength: number;
  maxLength: number;
};

const InputContainer = ({ children }: PropsWithChildren & { error?: boolean }) => {
  return <div className="relative">{children}</div>;
};

const TextField = ({ isTyped, error, ...props }: InputProps) => {
  return <input className={`form w-full ${isTyped ? 'form-typed' : ''} ${error ? 'form-error' : ''}`} {...props} />;
};

const TextareaField = ({ isTyped, error, ...props }: TextareaProps) => {
  return (
    <textarea {...props} className={`form resize-none ${isTyped ? 'form-typed' : ''} ${error ? 'form-error' : ''}`} />
  );
};

const RightContent = ({ children }: InputRightContentProps) => {
  return <div className="absolute -translate-y-1/2 right-4 top-1/2">{children}</div>;
};

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <p role="alert" className="my-2 text-xs text-error">
      {children}
    </p>
  );
};

const TextLengthMessage = ({ className, currentLength, maxLength }: TextLengthMessageProps) => {
  return (
    <p className={`text-gray-500 c1 ${className}`}>
      <span className={currentLength > 0 ? 'text-green-400' : ''}>
        {formatCurrentTextLength(currentLength, maxLength)}
      </span>
      <span>/{maxLength}</span>
    </p>
  );
};

export const Input = Object.assign(InputContainer, {
  TextField,
  TextareaField,
  ErrorMessage,
  RightContent,
  TextLengthMessage,
});

/** util */
const formatCurrentTextLength = (currentTextLength: number, maxTextLength: number) =>
  String(currentTextLength || 0).padStart(String(maxTextLength || 0).length, '0');
