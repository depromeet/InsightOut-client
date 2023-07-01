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
  args: { nickname: '디프만 4조' },
  render: (args) => (
    <Modal size={'2xl'} isOpen onClose={emptyFunction}>
      <WelcomeContents {...args} onClickButton={emptyFunction} />
    </Modal>
  ),
};
