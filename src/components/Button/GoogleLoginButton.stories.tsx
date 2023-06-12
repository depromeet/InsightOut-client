import { Meta, StoryObj } from '@storybook/react';
import GoogleLoginButton from './GoogleLoginButton';

const meta = {
  title: 'Components/GoogleLoginButton',
  component: GoogleLoginButton,
} satisfies Meta<typeof GoogleLoginButton>;

export default meta;
type Story = StoryObj<typeof GoogleLoginButton>;

export const _GoogleLoginButton: Story = {
  args: { onClick: () => {} },
  render: ({ onClick }) => <GoogleLoginButton onClick={onClick} />,
};
