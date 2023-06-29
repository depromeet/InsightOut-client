import type { Meta, StoryObj } from '@storybook/react';

import MyExperienceCard from './MyExperienceCard';

const meta: Meta<typeof MyExperienceCard> = {
  title: 'MyExperienceCard/MyExperienceCard',
  component: MyExperienceCard,
};

export default meta;

type Story = StoryObj<typeof MyExperienceCard>;

export const Default: Story = {
  render: () => <MyExperienceCard />,
  args: {},
};
