import type { Meta, StoryObj } from '@storybook/react';

import MyPageTab from './MyPageTab';

const meta: Meta<typeof MyPageTab> = {
  title: 'MyPage/MyPageTab',
  component: MyPageTab,
};

export default meta;

type Story = StoryObj<typeof MyPageTab>;

export const Default: Story = {
  args: { profileImgUrl: '', nickname: '루모스', email: 'lumos@gmail.com' },
  render: (args) => <MyPageTab {...args} />,
};
