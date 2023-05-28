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
        <Flex flexDirection={'column'}>
          <Heading>Primary</Heading>
          <Heading as={'h4'}>Small</Heading>
          <Flex gap={10}>
            <Button size="sm" variant="primary">
              BUTTON
            </Button>
            <Button size="sm" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>Medium</Heading>
          <Flex gap={10}>
            <Button size="md" variant="primary">
              BUTTON
            </Button>
            <Button size="md" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>Large</Heading>
          <Flex gap={10}>
            <Button size="lg" variant="primary">
              BUTTON
            </Button>
            <Button size="lg" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>XLarge</Heading>
          <Flex gap={10}>
            <Button size="xl" variant="primary">
              BUTTON
            </Button>
            <Button size="xl" variant="primary" disabled>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Secondary</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="secondary">
                BUTTON
              </Button>
              <Button size="sm" variant="secondary" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="secondary">
                BUTTON
              </Button>
              <Button size="md" variant="secondary" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="secondary">
                BUTTON
              </Button>
              <Button size="lg" variant="secondary" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="secondary">
                BUTTON
              </Button>
              <Button size="xl" variant="secondary" disabled>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Tertiary</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="tertiary">
                BUTTON
              </Button>
              <Button size="sm" variant="tertiary" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="tertiary">
                BUTTON
              </Button>
              <Button size="md" variant="tertiary" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="tertiary">
                BUTTON
              </Button>
              <Button size="lg" variant="tertiary" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="tertiary">
                BUTTON
              </Button>
              <Button size="xl" variant="tertiary" disabled>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Secondary-Green</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="secondary-green">
                BUTTON
              </Button>
              <Button size="sm" variant="secondary-green" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="secondary-green">
                BUTTON
              </Button>
              <Button size="md" variant="secondary-green" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="secondary-green">
                BUTTON
              </Button>
              <Button size="lg" variant="secondary-green" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="secondary-green">
                BUTTON
              </Button>
              <Button size="xl" variant="secondary-green" disabled>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Outlined</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="outlined">
                BUTTON
              </Button>
              <Button size="sm" variant="outlined" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="outlined">
                BUTTON
              </Button>
              <Button size="md" variant="outlined" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="outlined">
                BUTTON
              </Button>
              <Button size="lg" variant="outlined" disabled>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
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
      </Flex>
    );
  },
};

export const LeftIconButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'}>
          <Heading>Primary</Heading>
          <Heading as={'h4'}>Small</Heading>
          <Flex gap={10}>
            <Button size="sm" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>Medium</Heading>
          <Flex gap={10}>
            <Button size="md" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>Large</Heading>
          <Flex gap={10}>
            <Button size="lg" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>XLarge</Heading>
          <Flex gap={10}>
            <Button size="xl" variant="primary" leftIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="primary" disabled leftIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Secondary</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="secondary" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="sm" variant="secondary" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="secondary" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="md" variant="secondary" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="secondary" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="lg" variant="secondary" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="secondary" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="xl" variant="secondary" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Tertiary</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="tertiary" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="sm" variant="tertiary" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="tertiary" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="md" variant="tertiary" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="tertiary" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="lg" variant="tertiary" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="tertiary" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="xl" variant="tertiary" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Secondary-Green</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="secondary-green" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="sm" variant="secondary-green" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="secondary-green" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="md" variant="secondary-green" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="secondary-green" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="lg" variant="secondary-green" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="secondary-green" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="xl" variant="secondary-green" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Outlined</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="outlined" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="sm" variant="outlined" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="outlined" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="md" variant="outlined" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="outlined" leftIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="lg" variant="outlined" disabled leftIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
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
      </Flex>
    );
  },
};

export const RightIconButton: Story = {
  render: () => {
    return (
      <Flex flexDirection={'column'} gap={50}>
        <Flex flexDirection={'column'}>
          <Heading>Primary</Heading>
          <Heading as={'h4'}>Small</Heading>
          <Flex gap={10}>
            <Button size="sm" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="sm" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>Medium</Heading>
          <Flex gap={10}>
            <Button size="md" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="md" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>Large</Heading>
          <Flex gap={10}>
            <Button size="lg" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="lg" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
          <Heading as={'h4'}>XLarge</Heading>
          <Flex gap={10}>
            <Button size="xl" variant="primary" rightIcon={<IconHeart />}>
              BUTTON
            </Button>
            <Button size="xl" variant="primary" disabled rightIcon={<IconHeart />}>
              DISABLED
            </Button>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Secondary</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="secondary" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="sm" variant="secondary" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="secondary" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="md" variant="secondary" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="secondary" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="lg" variant="secondary" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="secondary" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="xl" variant="secondary" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Tertiary</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="tertiary" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="sm" variant="tertiary" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="tertiary" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="md" variant="tertiary" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="tertiary" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="lg" variant="tertiary" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="tertiary" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="xl" variant="tertiary" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Secondary-Green</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="secondary-green" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="sm" variant="secondary-green" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="secondary-green" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="md" variant="secondary-green" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="secondary-green" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="lg" variant="secondary-green" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
            <Flex gap={10}>
              <Button size="xl" variant="secondary-green" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="xl" variant="secondary-green" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={'column'}>
          <Flex flexDirection={'column'}>
            <Heading>Outlined</Heading>
            <Heading as={'h4'}>Small</Heading>
            <Flex gap={10}>
              <Button size="sm" variant="outlined" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="sm" variant="outlined" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Medium</Heading>
            <Flex gap={10}>
              <Button size="md" variant="outlined" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="md" variant="outlined" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>Large</Heading>
            <Flex gap={10}>
              <Button size="lg" variant="outlined" rightIcon={<IconHeart />}>
                BUTTON
              </Button>
              <Button size="lg" variant="outlined" disabled rightIcon={<IconHeart />}>
                DISABLED
              </Button>
            </Flex>
            <Heading as={'h4'}>XLarge</Heading>
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
      </Flex>
    );
  },
};
