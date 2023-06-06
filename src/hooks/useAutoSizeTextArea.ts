import { ComponentProps, RefObject, useEffect } from 'react';

type UseAutoResizeProps = ComponentProps<'textarea'> & { autoSize?: boolean };

export const useAutoSizeTextArea = (props: UseAutoResizeProps, textareaRef: RefObject<HTMLTextAreaElement>) => {
  const { value, autoSize } = props;

  useEffect(() => {
    if (textareaRef?.current && autoSize) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [textareaRef, value, autoSize]);
};
