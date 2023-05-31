import { Box, Flex, Heading } from '@chakra-ui/react';
import Chip from './Chip';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Chip',
  component: Chip,
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof Chip>;

export const DefaultChip: Story = {
  render: () => (
    <Flex flexDirection={'column'} gap={50}>
      <Box>
        <Heading>Primary</Heading>
        <Heading as={'h4'}>Small</Heading>
        <Chip size="sm" variant="primary">
          CHIP
        </Chip>
        <Heading as={'h4'}>Medium</Heading>
        <Chip size="md" variant="primary">
          CHIP
        </Chip>
      </Box>
      <Flex flexDirection={'column'}>
        <Box>
          <Heading>Secondary</Heading>
          <Heading as={'h4'}>Small</Heading>
          <Chip size="sm" variant="secondary">
            CHIP
          </Chip>
          <Heading as={'h4'}>Medium</Heading>
          <Chip size="md" variant="secondary">
            CHIP
          </Chip>
        </Box>
      </Flex>
    </Flex>
  ),
};
