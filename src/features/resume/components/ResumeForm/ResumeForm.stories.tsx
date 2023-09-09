import type { Meta, StoryObj } from '@storybook/react';

import ResumeForm from './ResumeForm';

const meta: Meta<typeof ResumeForm> = {
  title: 'Resume/ResumeForm/ResumeForm',
  component: ResumeForm,
};

export default meta;

type Story = StoryObj<typeof ResumeForm>;

export const Default: Story = {
  render: () => <ResumeForm questionId={1} />,
  args: {},
};
