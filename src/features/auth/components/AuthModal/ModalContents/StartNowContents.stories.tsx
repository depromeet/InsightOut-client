import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/components/Modal/Modal';
import emptyFunction from '@/shared/utils/emptyFunction';

import StartNowContents from './StartNowContents';

const meta = {
  title: 'Auth/AuthModal/ModalContents',
  component: StartNowContents,
} satisfies Meta<typeof StartNowContents>;

export default meta;
type Story = StoryObj<typeof StartNowContents>;

export const _StartNowContents: Story = {
  args: { onClickLeftButton: emptyFunction, onClickRightButton: emptyFunction },
  render: (args) => (
    <Modal size={'5xl'} isOpen onClose={emptyFunction}>
      <StartNowContents {...args} />
    </Modal>
  ),
};
