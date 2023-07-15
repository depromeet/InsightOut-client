import type { Meta, StoryObj } from '@storybook/react';

import GnbMyPage from './GnbMyPage';

const meta: Meta<typeof GnbMyPage> = {
  title: 'MyPage/GnbMyPage',
  component: GnbMyPage,
};

export default meta;

type Story = StoryObj<typeof GnbMyPage>;

export const Default: Story = {
  args: { profileImgUrl: '', nickname: '루모스', email: 'lumos@gmail.com' },
  render: (args) => (
    <div className="w-fit p-[20px] text-light subhead3 bg-main">
      <GnbMyPage {...args} />
    </div>
  ),
};
