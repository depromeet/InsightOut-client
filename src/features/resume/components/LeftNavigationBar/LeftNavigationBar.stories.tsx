import type { Meta, StoryObj } from '@storybook/react';

import LeftNavigationBar from './LeftNavigationBar';

const meta: Meta<typeof LeftNavigationBar> = {
  title: 'Components/LNB/LeftNavigationBar',
  component: LeftNavigationBar,
};

export default meta;

type Story = StoryObj<typeof LeftNavigationBar>;

export const Default: Story = {
  render: (args) => <LeftNavigationBar {...args} />,
  args: {
    resumeList: [
      {
        id: 1234,
        title: '디프만 13기',
        createdAt: '2023-06-05T05:58:44.402Z',
        updatedAt: '2023-06-05T05:58:44.402Z',
        questions: [
          {
            id: 1234,
            title: '디프만 13기 지원동기',
            answer: '디프만을 통한 빠른 성장',
            updatedAt: '2023-06-05T05:58:44.402Z',
          },
        ],
      },
    ],
  },
};
