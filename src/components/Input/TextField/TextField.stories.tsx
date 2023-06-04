import type { Meta, StoryObj } from '@storybook/react';

import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    mode: 'default',
    chipTitle: '나의 역할',
  },
};
