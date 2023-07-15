import { Meta, StoryObj } from '@storybook/react';

import Modal from '@/components/Modal/Modal';
import emptyFunction from '@/shared/utils/emptyFunction';

import CategoriesContents from './CategoriesContents';

const meta = {
  title: 'Auth/AuthModal/ModalContents',
  component: CategoriesContents,
} satisfies Meta<typeof CategoriesContents>;

export default meta;
type Story = StoryObj<typeof CategoriesContents>;

export const _CategoriesContents: Story = {
  args: {
    nickname: '디프만 4조',
    selectedCategory: { title: '개발', field: 'DEVELOPMENT' },
    onClickLeftButton: emptyFunction,
    onClickRightButton: emptyFunction,
  },
  render: (args) => (
    <Modal size={'5xl'} isOpen onClose={emptyFunction}>
      <CategoriesContents {...args} />
    </Modal>
  ),
};
