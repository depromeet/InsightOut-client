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
          <TextButton size="S">BUTTON</TextButton>
          <TextButton size="S" disabled>
            DISABLED
          </TextButton>
          <TextButton size="S" underline>
            BUTTON
          </TextButton>
          <TextButton size="S" disabled underline>
            DISABLED
          </TextButton>
        </Flex>
        <Heading as={'h4'} size={'md'}>
          Medium
        </Heading>
        <Flex gap={10}>
          <TextButton size="M">BUTTON</TextButton>
          <TextButton size="M" disabled>
            DISABLED
          </TextButton>
          <TextButton size="M" underline>
            BUTTON
          </TextButton>
          <TextButton size="M" disabled underline>
            DISABLED
          </TextButton>
        </Flex>
        <Heading as={'h4'} size={'md'}>
          Large
        </Heading>
        <Flex gap={10}>
          <TextButton size="L">BUTTON</TextButton>
          <TextButton size="L" disabled>
            DISABLED
          </TextButton>
          <TextButton size="L" underline>
            BUTTON
          </TextButton>
          <TextButton size="L" disabled underline>
            DISABLED
          </TextButton>
        </Flex>
        <Heading as={'h4'} size={'md'}>
          XLarge
        </Heading>
        <Flex gap={10}>
          <TextButton size="XL">BUTTON</TextButton>
          <TextButton size="XL" disabled>
            DISABLED
          </TextButton>
          <TextButton size="XL" underline>
            BUTTON
          </TextButton>
          <TextButton size="XL" disabled underline>
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
            <TextButton size="S" leftIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="S" disabled leftIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="S" leftIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="S" disabled leftIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <TextButton size="M" leftIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="M" disabled leftIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="M" leftIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="M" disabled leftIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <TextButton size="L" leftIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="L" disabled leftIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="L" leftIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="L" disabled leftIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <TextButton size="XL" leftIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="XL" disabled leftIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="XL" leftIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="XL" disabled leftIcon={<IconHeart />} underline>
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
            <TextButton size="S" rightIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="S" disabled rightIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="S" rightIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="S" disabled rightIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <TextButton size="M" rightIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="M" disabled rightIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="M" rightIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="M" disabled rightIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <TextButton size="L" rightIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="L" disabled rightIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="L" rightIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="L" disabled rightIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <TextButton size="XL" rightIcon={<IconHeart />}>
              BUTTON
            </TextButton>
            <TextButton size="XL" disabled rightIcon={<IconHeart />}>
              DISABLED
            </TextButton>
            <TextButton size="XL" rightIcon={<IconHeart />} underline>
              BUTTON
            </TextButton>
            <TextButton size="XL" disabled rightIcon={<IconHeart />} underline>
              DISABLED
            </TextButton>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};
