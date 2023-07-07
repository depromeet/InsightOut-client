import type { Meta, StoryObj } from '@storybook/react';

import SpellChecker from './SpellChecker';

const meta: Meta<typeof SpellChecker> = {
  title: 'Resume/SpellChecker/SpellChecker',
  component: SpellChecker,
};

export default meta;

type Story = StoryObj<typeof SpellChecker>;

export const Default: Story = {
  render: () => <SpellChecker />,
  args: {},
};

export const Example: Story = {
  render: () => <SpellChecker />,
};
