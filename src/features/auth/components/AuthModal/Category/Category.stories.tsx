import { Flex } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

import Category from './Category';

const meta = {
  title: 'Auth/AuthModal',
  component: Category,
} satisfies Meta<typeof Category>;

export default meta;
type Story = StoryObj<typeof Category>;

export const _Category: Story = {
  args: { title: '개발' },
  render: (args) => (
    <Flex>
      <Category {...args} />
    </Flex>
  ),
};
