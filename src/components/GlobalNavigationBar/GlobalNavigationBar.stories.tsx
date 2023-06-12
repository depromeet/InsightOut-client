import { Meta, StoryObj } from '@storybook/react';
import GlobalNavigationBar from './GlobalNavigationBar';
import emptyFunction from '@/shared/utils/emptyFunction';

const meta = {
  title: 'Components/GlobalNavigationBar',
  component: GlobalNavigationBar,
} satisfies Meta<typeof GlobalNavigationBar>;

export default meta;
type Story = StoryObj<typeof GlobalNavigationBar>;

export const _GlobalNavigationBar: Story = {
  render: () => <GlobalNavigationBar isSignedIn={false} signIn={emptyFunction} />,
};
