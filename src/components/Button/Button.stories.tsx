import { Flex, Heading } from '@chakra-ui/react';
import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Variant: Story = {
  args: { size: 'lg' },
  render: ({ ...args }) => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'}>
          <Heading>Primary</Heading>
          <Flex gap={10}>
            <Button {...args} variant="primary">
              BUTTON
            </Button>
            <Button {...args} variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Heading>Secondary</Heading>
          <Flex gap={10}>
            <Button {...args} variant="secondary">
              BUTTON
            </Button>
            <Button {...args} variant="secondary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Heading>Tertiary</Heading>
          <Flex gap={10}>
            <Button {...args} variant="tertiary">
              BUTTON
            </Button>
            <Button {...args} variant="tertiary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Heading>Secondary-Green</Heading>
          <Flex gap={10}>
            <Button {...args} variant="secondary-green">
              BUTTON
            </Button>
            <Button {...args} variant="secondary-green" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Heading>Outlined</Heading>
          <Flex gap={10}>
            <Button {...args} variant="outlined">
              BUTTON
            </Button>
            <Button {...args} variant="outlined" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};

export const Sizes: Story = {
  args: { variant: 'primary' },
  render: ({ ...args }) => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'}>
          <Heading>Small</Heading>
          <Flex gap={10}>
            <Button {...args} size="sm">
              BUTTON
            </Button>
            <Button {...args} size="sm" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Heading>Medium</Heading>
          <Flex gap={10}>
            <Button {...args} size="md">
              BUTTON
            </Button>
            <Button {...args} size="md" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Heading>Large</Heading>
          <Flex gap={10}>
            <Button {...args} size="lg">
              BUTTON
            </Button>
            <Button {...args} size="lg" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Heading>XLarge</Heading>
          <Flex gap={10}>
            <Button {...args} size="xl">
              BUTTON
            </Button>
            <Button {...args} size="xl" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};
