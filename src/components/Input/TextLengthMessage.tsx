type TextLengthMessageProps = {
  currentLength: number;
  maxLength: number;
};

export const TextLengthMessage = ({ currentLength, maxLength }: TextLengthMessageProps) => (
  <p className="text-gray-500 c1">
    <span className={currentLength > 0 ? 'text-green-400' : ''}>
      {formatCurrentTextLength(currentLength, maxLength)}
    </span>
    <span>/{maxLength}</span>
  </p>
);

const formatCurrentTextLength = (currentTextLength: number, maxTextLength: number) =>
  String(currentTextLength || 0).padStart(String(maxTextLength || 0).length, '0');
