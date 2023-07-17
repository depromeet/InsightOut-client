import type { Meta, StoryObj } from '@storybook/react';

import NotFound from './NotFound';

const meta: Meta<typeof NotFound> = {
  title: 'Resume/NotFound/NotFound',
  component: NotFound,
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  render: (args) => <NotFound {...args} />,
  args: {
    title: '앗! 아직 작성한 자기소개서가 없어요',
    description: '시작이 반이에요. 자기소개서를 추가해보세요!',
    buttonText: '자기소개서 추가하기',
  },
};
