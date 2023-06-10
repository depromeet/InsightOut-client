import { Flex, Heading } from '@chakra-ui/react';
import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';
import IconHeart from '../Icon/IconHeart';

const meta = {
  title: 'Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Primary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="primary">
              BUTTON
            </Button>
            <Button size="sm" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="primary">
              BUTTON
            </Button>
            <Button size="md" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="primary">
              BUTTON
            </Button>
            <Button size="lg" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="primary">
              BUTTON
            </Button>
            <Button size="xl" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="secondary">
              BUTTON
            </Button>
            <Button size="sm" variant="secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="secondary">
              BUTTON
            </Button>
            <Button size="md" variant="secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="secondary">
              BUTTON
            </Button>
            <Button size="lg" variant="secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="secondary">
              BUTTON
            </Button>
            <Button size="xl" variant="secondary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Tertiary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="tertiary">
              BUTTON
            </Button>
            <Button size="sm" variant="tertiary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="tertiary">
              BUTTON
            </Button>
            <Button size="md" variant="tertiary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="tertiary">
              BUTTON
            </Button>
            <Button size="lg" variant="tertiary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="tertiary">
              BUTTON
            </Button>
            <Button size="xl" variant="tertiary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary-Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="secondary-secondary">
              BUTTON
            </Button>
            <Button size="sm" variant="secondary-secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="secondary-secondary">
              BUTTON
            </Button>
            <Button size="md" variant="secondary-secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="secondary-secondary">
              BUTTON
            </Button>
            <Button size="lg" variant="secondary-secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="secondary-secondary">
              BUTTON
            </Button>
            <Button size="xl" variant="secondary-secondary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Outlined</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="outlined">
              BUTTON
            </Button>
            <Button size="sm" variant="outlined" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="outlined">
              BUTTON
            </Button>
            <Button size="md" variant="outlined" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="outlined">
              BUTTON
            </Button>
            <Button size="lg" variant="outlined" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="outlined">
              BUTTON
            </Button>
            <Button size="xl" variant="outlined" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};

export const IconOnlyButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Primary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="primary" onlyIcon={<IconHeart />} />
            <Button size="sm" variant="primary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="primary" onlyIcon={<IconHeart />} />
            <Button size="md" variant="primary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="primary" onlyIcon={<IconHeart />} />
            <Button size="lg" variant="primary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="primary" onlyIcon={<IconHeart />} />
            <Button size="xl" variant="primary" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="secondary" onlyIcon={<IconHeart />} />
            <Button size="sm" variant="secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="secondary" onlyIcon={<IconHeart />} />
            <Button size="md" variant="secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="secondary" onlyIcon={<IconHeart />} />
            <Button size="lg" variant="secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="secondary" onlyIcon={<IconHeart />} />
            <Button size="xl" variant="secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Tertiary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="tertiary" onlyIcon={<IconHeart />} />
            <Button size="sm" variant="tertiary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="tertiary" onlyIcon={<IconHeart />} />
            <Button size="md" variant="tertiary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="tertiary" onlyIcon={<IconHeart />} />
            <Button size="lg" variant="tertiary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="tertiary" onlyIcon={<IconHeart />} />
            <Button size="xl" variant="tertiary" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary-Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="secondary-secondary" onlyIcon={<IconHeart />} />
            <Button size="sm" variant="secondary-secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="secondary-secondary" onlyIcon={<IconHeart />} />
            <Button size="md" variant="secondary-secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="secondary-secondary" onlyIcon={<IconHeart />} />
            <Button size="lg" variant="secondary-secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="secondary-secondary" onlyIcon={<IconHeart />} />
            <Button size="xl" variant="secondary-secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Outlined</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="outlined" onlyIcon={<IconHeart />} />
            <Button size="sm" variant="outlined" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="outlined" onlyIcon={<IconHeart />} />
            <Button size="md" variant="outlined" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="outlined" onlyIcon={<IconHeart />} />
            <Button size="lg" variant="outlined" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="outlined" onlyIcon={<IconHeart />} />
            <Button size="xl" variant="outlined" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
      </Flex>
    );
  },
};

export const LeftIconButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Primary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Tertiary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="tertiary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="tertiary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="tertiary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="tertiary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="tertiary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="tertiary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="tertiary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="tertiary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary-Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="secondary-secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="secondary-secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="secondary-secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="secondary-secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="secondary-secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="secondary-secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="secondary-secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="secondary-secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Outlined</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="outlined" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="outlined" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="outlined" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="outlined" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="outlined" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="outlined" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="outlined" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="outlined" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};

export const RightIconButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Primary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Tertiary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="tertiary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="tertiary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="tertiary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="tertiary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="tertiary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="tertiary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="tertiary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="tertiary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary-Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="secondary-secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="secondary-secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="secondary-secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="secondary-secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="secondary-secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="secondary-secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="secondary-secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="secondary-secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Outlined</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="sm" variant="outlined" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="outlined" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="md" variant="outlined" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="outlined" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="lg" variant="outlined" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="outlined" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="xl" variant="outlined" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="outlined" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};
