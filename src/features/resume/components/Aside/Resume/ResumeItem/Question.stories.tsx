import type { Meta, StoryObj } from '@storybook/react';

import Question from './Question';

const meta: Meta<typeof Question> = {
  title: 'Resume/Aside/ResumeItem/Question',
  component: Question,
};

export default meta;

type Story = StoryObj<typeof Question>;

export const Default: Story = {
  render: (args) => <Question {...args} />,
  args: {
    id: 1,
    title: '샘플) 자신의 경쟁력에 대해 구체적으로 작성해보세요.',
  },
};
