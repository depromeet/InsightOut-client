import { Meta, StoryObj } from '@storybook/react';

import GlobalNavigationBar from './GlobalNavigationBar';

const meta = {
  title: 'Components/GlobalNavigationBar',
  component: GlobalNavigationBar,
} satisfies Meta<typeof GlobalNavigationBar>;

export default meta;
type Story = StoryObj<typeof GlobalNavigationBar>;

export const _GlobalNavigationBar: Story = {
  render: () => <GlobalNavigationBar isSignedIn={false} isRequesting={false} />,
};
