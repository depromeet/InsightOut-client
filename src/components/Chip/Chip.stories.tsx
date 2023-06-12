import { Box, Flex, Heading } from '@chakra-ui/react';
import Chip from './Chip';
import { Meta, StoryObj } from '@storybook/react';
import Badge from '../Badge/Badge';

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
        <Chip size="S" variant="primary">
          CHIP
        </Chip>

        <Heading as={'h4'}>Medium</Heading>
        <Chip size="M" variant="primary">
          CHIP
        </Chip>
      </Box>
      <Flex flexDirection={'column'}>
        <Box>
          <Heading>Secondary</Heading>
          <Heading as={'h4'}>Small</Heading>
          <Chip size="S" variant="secondary">
            CHIP
          </Chip>
          <Heading as={'h4'}>Medium</Heading>
          <Chip size="M" variant="secondary">
            CHIP
          </Chip>
        </Box>
      </Flex>
      <Flex flexDirection={'column'}>
        <Box>
          <Heading>Pressed</Heading>
          <Heading as={'h4'}>Small</Heading>
          <Chip size="S" variant="primary-pressed">
            CHIP
          </Chip>
          <Heading as={'h4'}>Medium</Heading>
          <Chip size="M" variant="secondary-pressed">
            CHIP
          </Chip>
        </Box>
      </Flex>
    </Flex>
  ),
};

export const ChipWithBadge: Story = {
  render: () => (
    <Flex flexDirection={'column'} gap={50}>
      <Box>
        <Heading>Primary</Heading>
        <Heading as={'h4'}>Small</Heading>
        <Chip
          size="S"
          variant="primary"
          badge={
            <Badge varient="gray100-outline" size="S">
              99+
            </Badge>
          }>
          CHIP
        </Chip>
        <Heading as={'h4'}>Medium</Heading>
        <Chip
          size="M"
          variant="primary"
          badge={
            <Badge varient="gray100-outline" size="S">
              99+
            </Badge>
          }>
          CHIP
        </Chip>
      </Box>
      <Box>
        <Heading>Secondary</Heading>
        <Heading as={'h4'}>Small</Heading>
        <Chip
          size="S"
          variant="secondary"
          badge={
            <Badge varient="gray100-outline" size="S">
              99+
            </Badge>
          }>
          CHIP
        </Chip>
        <Heading as={'h4'}>Medium</Heading>
        <Chip
          size="M"
          variant="secondary"
          badge={
            <Badge varient="gray100-outline" size="S">
              99+
            </Badge>
          }>
          CHIP
        </Chip>
      </Box>
      <Box>
        <Heading>Pressed</Heading>
        <Heading as={'h4'}>Small</Heading>
        <Chip
          size="M"
          variant="primary-pressed"
          badge={
            <Badge varient="gray100-outline" size="S">
              99+
            </Badge>
          }>
          CHIP
        </Chip>
        <Heading as={'h4'}>Medium</Heading>
        <Chip
          size="M"
          variant="secondary-pressed"
          badge={
            <Badge varient="gray100-outline" size="S">
              99+
            </Badge>
          }>
          CHIP
        </Chip>
      </Box>
    </Flex>
  ),
};
