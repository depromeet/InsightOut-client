import { Meta, StoryObj } from '@storybook/react';
import CategoriesContents from './CategoriesContents';
import Modal from '@/components/Modal/Modal';
import emptyFunction from '@/shared/utils/emptyFunction';

const meta = {
  title: 'Auth/AuthModal/ModalContents',
  component: CategoriesContents,
} satisfies Meta<typeof CategoriesContents>;

export default meta;
type Story = StoryObj<typeof CategoriesContents>;

export const _CategoriesContents: Story = {
  args: { nickname: '디프만 4조' },
  render: (args) => (
    <Modal size={'5xl'} isOpen onClose={emptyFunction}>
      <CategoriesContents {...args} />
    </Modal>
  ),
};
