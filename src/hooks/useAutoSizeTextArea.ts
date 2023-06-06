import { ComponentProps, MutableRefObject, useEffect, useRef } from 'react';

type UseAutoResizeProps = ComponentProps<'textarea'> & { autoSize?: boolean };

export const useAutoSizeTextArea = (
  props: UseAutoResizeProps,
  textareaRef: MutableRefObject<HTMLTextAreaElement> | null
) => {
  const { value, autoSize } = props;

  const newRef = useRef<HTMLTextAreaElement>(null);
  const usedRef = textareaRef ? textareaRef : newRef;

  useEffect(() => {
    if (usedRef.current && autoSize) {
      usedRef.current.style.height = 'auto';
      usedRef.current.style.height = `${usedRef.current.scrollHeight}px`;
    }
  }, [usedRef, value, autoSize]);

  return usedRef;
};
