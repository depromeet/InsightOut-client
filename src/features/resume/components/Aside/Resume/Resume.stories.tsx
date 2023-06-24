import type { Meta, StoryObj } from '@storybook/react';

import Resume from './Resume';
import ResumeContainer from './ResumeListContainer';

const meta: Meta<typeof Resume> = {
  title: 'Resume/Aside/Resume',
  component: Resume,
};

export default meta;

type Story = StoryObj<typeof Resume>;

export const Default: Story = {
  render: (args) => (
    <ResumeContainer>
      <Resume {...args} />
    </ResumeContainer>
  ),
  args: {
    resume: {
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
  },
};
