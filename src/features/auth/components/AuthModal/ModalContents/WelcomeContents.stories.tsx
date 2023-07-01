import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/components/Modal/Modal';
import emptyFunction from '@/shared/utils/emptyFunction';

import WelcomeContents from './WelcomeContents';

const meta = {
  title: 'Auth/AuthModal',
  component: WelcomeContents,
} satisfies Meta<typeof WelcomeContents>;

export default meta;
type Story = StoryObj<typeof WelcomeContents>;

export const _WelcomeContents: Story = {
  render: () => (
    <Modal isOpen onClose={emptyFunction}>
      <WelcomeContents onClickButton={emptyFunction} />
    </Modal>
  ),
};
