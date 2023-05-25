type TextLengthMessageProps = {
  currentLength: number;
  maxLength: number;
};

const TextLengthMessage = ({ currentLength, maxLength }: TextLengthMessageProps) => {
  return (
    <p className="float-right inline-block text-xs text-[#A1A3B0]">
      <span>{formatCurrentTextLength(currentLength, maxLength)}</span>
      <span>/{maxLength}</span>
      <span>(공백포함)</span>
    </p>
  );
};

export default TextLengthMessage;

const formatCurrentTextLength = (currentTextLength: number, maxTextLength: number) =>
  String(currentTextLength || 0).padStart(String(maxTextLength || 0).length, '0');
