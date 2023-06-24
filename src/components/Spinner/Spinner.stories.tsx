import { Box, Flex, Heading } from '@chakra-ui/react';
import Spinner from './Spinner';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: { style: 'primary500' },
  render: (args) => (
    <Flex flexDir={'column'} gap={'15px'}>
      <Box>
        <Heading size={'md'} marginBottom={5}>
          Small
        </Heading>
        <Spinner {...args} size="S" />
      </Box>
      <Box>
        <Heading size={'md'} marginBottom={5}>
          Medium
        </Heading>
        <Spinner {...args} size="M" />
      </Box>
      <Box>
        <Heading size={'md'} marginBottom={5}>
          Large
        </Heading>
        <Spinner {...args} size="L" />
      </Box>
    </Flex>
  ),
};

export const Secondary: Story = {
  args: { style: 'secondary500' },
  render: (args) => (
    <Flex flexDir={'column'} gap={'15px'}>
      <Box>
        <Heading size={'md'} marginBottom={5}>
          Small
        </Heading>
        <Spinner {...args} size="S" />
      </Box>
      <Box>
        <Heading size={'md'} marginBottom={5}>
          Medium
        </Heading>
        <Spinner {...args} size="M" />
      </Box>
      <Box>
        <Heading size={'md'} marginBottom={5}>
          Large
        </Heading>
        <Spinner {...args} size="L" />
      </Box>
    </Flex>
  ),
};
