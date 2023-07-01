import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/components/Modal/Modal';
import emptyFunction from '@/shared/utils/emptyFunction';

import SignUpContents from './SignUpContents';

const meta = {
  title: 'Auth/AuthModal',
  component: SignUpContents,
} satisfies Meta<typeof SignUpContents>;

export default meta;
type Story = StoryObj<typeof SignUpContents>;

export const _SignUpContents: Story = {
  render: () => (
    <Modal size={'2xl'} isOpen onClose={emptyFunction}>
      <SignUpContents signIn={emptyFunction} />
    </Modal>
  ),
};
