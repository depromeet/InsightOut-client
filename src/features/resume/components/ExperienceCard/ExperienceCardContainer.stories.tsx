import type { Meta, StoryObj } from '@storybook/react';

import ExperienceCardContainer from './ExperienceCardContainer';

const meta: Meta<typeof ExperienceCardContainer> = {
  title: 'ExperienceCard/ExperienceCardContainer',
  component: ExperienceCardContainer,
};

export default meta;

type Story = StoryObj<typeof ExperienceCardContainer>;

export const Default: Story = {
  render: () => <ExperienceCardContainer />,
  args: {},
};
