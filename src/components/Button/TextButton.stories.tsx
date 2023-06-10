import { Meta, StoryObj } from '@storybook/react';
import TextButton from './TextButton';
import { Flex, Heading } from '@chakra-ui/react';
import IconHeart from '../Icon/IconHeart';

const meta = {
  title: 'Components/TextButton',
  component: TextButton,
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof TextButton>;

export const DefaultTextButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'}>
        <Heading as={'h4'} size={'md'}>
          Small
        </Heading>
        <Flex gap={10}>
          <TextButton size="sm">BUTTON</TextButton>
          <TextButton size="sm" disabled>
            DISABLED
          </TextButton>
          <TextButton size="sm" underline>
            BUTTON
          </TextButton>
          <TextButton size="sm" disabled underline>
            DISABLED
          </TextButton>
        </Flex>
        <Heading as={'h4'} size={'md'}>
          Medium
        </Heading>
        <Flex gap={10}>
          <TextButton size="md">BUTTON</TextButton>
          <TextButton size="md" disabled>
            DISABLED
          </TextButton>
          <TextButton size="md" underline>
            BUTTON
          </TextButton>
          <TextButton size="md" disabled underline>
            DISABLED
          </TextButton>
        </Flex>
        <Heading as={'h4'} size={'md'}>
          Large
        </Heading>
        <Flex gap={10}>
          <TextButton size="lg">BUTTON</TextButton>
          <TextButton size="lg" disabled>
            DISABLED
          </TextButton>
          <TextButton size="lg" underline>
            BUTTON
          </TextButton>
          <TextButton size="lg" disabled underline>
            DISABLED
          </TextButton>
        </Flex>
        <Heading as={'h4'} size={'md'}>
          XLarge
        </Heading>
        <Flex gap={10}>
          <TextButton size="xl">BUTTON</TextButton>
          <TextButton size="xl" disabled>
            DISABLED
          </TextButton>
          <TextButton size="xl" underline>
            BUTTON
          </TextButton>
          <TextButton size="xl" disabled underline>
            DISABLED
          </TextButton>
        </Flex>
      </Flex>
    );
  },
};

export const LeftIconTextButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'}>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <TextButton size="sm" leftIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="sm" disabled leftIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="sm" leftIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="sm" disabled leftIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <TextButton size="md" leftIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="md" disabled leftIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="md" leftIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="md" disabled leftIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <TextButton size="lg" leftIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="lg" disabled leftIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="lg" leftIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="lg" disabled leftIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <TextButton size="xl" leftIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="xl" disabled leftIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="xl" leftIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="xl" disabled leftIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};

export const RightIconTextButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'}>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <TextButton size="sm" rightIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="sm" disabled rightIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="sm" rightIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="sm" disabled rightIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <TextButton size="md" rightIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="md" disabled rightIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="md" rightIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="md" disabled rightIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <TextButton size="lg" rightIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="lg" disabled rightIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="lg" rightIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="lg" disabled rightIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <TextButton size="xl" rightIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="xl" disabled rightIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="xl" rightIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="xl" disabled rightIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};
