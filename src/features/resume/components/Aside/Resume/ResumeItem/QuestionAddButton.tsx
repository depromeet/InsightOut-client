import { ComponentProps } from 'react';

import IconPlus from '@/components/Icon/IconPlus';

const QuestionAddButton = ({ ...props }: ComponentProps<'button'>) => (
  <button
    className="flex gap-1 px-2 py-3 mx-4 my-3 border-gray-400 border-[1px] border-dashed bg-gray-50 b3 rounded-lg"
    {...props}>
    <IconPlus />
    문항 추가
  </button>
);

export default QuestionAddButton;
