import { Flex, Heading } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

import IconHeart from '../Icon/IconHeart';
import Button from './Button';

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
          <Heading>Gray900</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="gray900">
              BUTTON
            </Button>
            <Button size="S" variant="gray900" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="gray900">
              BUTTON
            </Button>
            <Button size="M" variant="gray900" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="gray900">
              BUTTON
            </Button>
            <Button size="L" variant="gray900" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="gray900">
              BUTTON
            </Button>
            <Button size="XL" variant="gray900" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>rimary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="primary">
              BUTTON
            </Button>
            <Button size="S" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="primary">
              BUTTON
            </Button>
            <Button size="M" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="primary">
              BUTTON
            </Button>
            <Button size="L" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="primary">
              BUTTON
            </Button>
            <Button size="XL" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>gray200</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="gray200">
              BUTTON
            </Button>
            <Button size="S" variant="gray200" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="gray200">
              BUTTON
            </Button>
            <Button size="M" variant="gray200" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="gray200">
              BUTTON
            </Button>
            <Button size="L" variant="gray200" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="gray200">
              BUTTON
            </Button>
            <Button size="XL" variant="gray200" disabled>
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
            <Button size="S" variant="secondary">
              BUTTON
            </Button>
            <Button size="S" variant="secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="secondary">
              BUTTON
            </Button>
            <Button size="M" variant="secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="secondary">
              BUTTON
            </Button>
            <Button size="L" variant="secondary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="secondary">
              BUTTON
            </Button>
            <Button size="XL" variant="secondary" disabled>
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
            <Button size="S" variant="outlined">
              BUTTON
            </Button>
            <Button size="S" variant="outlined" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="outlined">
              BUTTON
            </Button>
            <Button size="M" variant="outlined" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="outlined">
              BUTTON
            </Button>
            <Button size="L" variant="outlined" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="outlined">
              BUTTON
            </Button>
            <Button size="XL" variant="outlined" disabled>
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
          <Heading>Gray900</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="gray900" onlyIcon={<IconHeart />} />
            <Button size="S" variant="gray900" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="gray900" onlyIcon={<IconHeart />} />
            <Button size="M" variant="gray900" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="gray900" onlyIcon={<IconHeart />} />
            <Button size="L" variant="gray900" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="gray900" onlyIcon={<IconHeart />} />
            <Button size="XL" variant="gray900" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>primary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="primary" onlyIcon={<IconHeart />} />
            <Button size="S" variant="primary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="primary" onlyIcon={<IconHeart />} />
            <Button size="M" variant="primary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="primary" onlyIcon={<IconHeart />} />
            <Button size="L" variant="primary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="primary" onlyIcon={<IconHeart />} />
            <Button size="XL" variant="primary" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>gray200</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="gray200" onlyIcon={<IconHeart />} />
            <Button size="S" variant="gray200" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="gray200" onlyIcon={<IconHeart />} />
            <Button size="M" variant="gray200" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="gray200" onlyIcon={<IconHeart />} />
            <Button size="L" variant="gray200" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="gray200" onlyIcon={<IconHeart />} />
            <Button size="XL" variant="gray200" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Secondary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="secondary" onlyIcon={<IconHeart />} />
            <Button size="S" variant="secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="secondary" onlyIcon={<IconHeart />} />
            <Button size="M" variant="secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="secondary" onlyIcon={<IconHeart />} />
            <Button size="L" variant="secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="secondary" onlyIcon={<IconHeart />} />
            <Button size="XL" variant="secondary" disabled onlyIcon={<IconHeart />} />
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>Outlined</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="outlined" onlyIcon={<IconHeart />} />
            <Button size="S" variant="outlined" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="outlined" onlyIcon={<IconHeart />} />
            <Button size="M" variant="outlined" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="outlined" onlyIcon={<IconHeart />} />
            <Button size="L" variant="outlined" disabled onlyIcon={<IconHeart />} />
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="outlined" onlyIcon={<IconHeart />} />
            <Button size="XL" variant="outlined" disabled onlyIcon={<IconHeart />} />
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
          <Heading>Gray900</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="gray900" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="gray900" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="gray900" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="gray900" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="gray900" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="gray900" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="gray900" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="gray900" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>primary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>gray200</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="gray200" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="gray200" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="gray200" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="gray200" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="gray200" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="gray200" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="gray200" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="gray200" disabled leftIcon={<IconHeart />}>
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
            <Button size="S" variant="secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="secondary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="secondary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="secondary" disabled leftIcon={<IconHeart />}>
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
            <Button size="S" variant="outlined" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="outlined" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="outlined" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="outlined" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="outlined" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="outlined" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="outlined" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="outlined" disabled leftIcon={<IconHeart />}>
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
          <Heading>Gray900</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="gray900" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="gray900" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="gray900" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="gray900" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="gray900" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="gray900" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="gray900" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="gray900" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>primary</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'} gap={5}>
          <Heading>gray200</Heading>
          <Heading as={'h4'} size={'md'}>
            Small
          </Heading>
          <Flex gap={10}>
            <Button size="S" variant="gray200" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="gray200" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="gray200" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="gray200" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="gray200" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="gray200" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="gray200" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="gray200" disabled rightIcon={<IconHeart />}>
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
            <Button size="S" variant="secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="secondary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="secondary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="secondary" disabled rightIcon={<IconHeart />}>
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
            <Button size="S" variant="outlined" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="S" variant="outlined" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Medium
          </Heading>
          <Flex gap={10}>
            <Button size="M" variant="outlined" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="M" variant="outlined" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            Large
          </Heading>
          <Flex gap={10}>
            <Button size="L" variant="outlined" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="L" variant="outlined" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'} size={'md'}>
            XLarge
          </Heading>
          <Flex gap={10}>
            <Button size="XL" variant="outlined" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="XL" variant="outlined" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  },
};
