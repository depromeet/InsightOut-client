import { Meta, StoryObj } from '@storybook/react';
import CategoryCard from './CategoryCard';
import { Flex } from '@chakra-ui/react';

const meta = {
  title: 'Auth/AuthModal',
  component: CategoryCard,
} satisfies Meta<typeof CategoryCard>;

export default meta;
type Story = StoryObj<typeof CategoryCard>;

export const _CategoryCard: Story = {
  args: { title: '개발' },
  render: (args) => (
    <Flex>
      <CategoryCard {...args} />
    </Flex>
  ),
};
