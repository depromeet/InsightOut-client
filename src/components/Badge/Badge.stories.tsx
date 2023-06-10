import { Flex, Heading } from '@chakra-ui/react';
import Badge from './Badge';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const DefaultBadge: Story = {
  render: () => (
    <>
      <Heading>Tertiary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge varient="gray-100-outline" size="S">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge varient="gray-100-outline" size="M">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge varient="gray-100-outline" size="L">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Outlined Primary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge varient="primary-50-outline" size="S">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge varient="primary-50-outline" size="M">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge varient="primary-50-outline" size="L">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Outlined Secondary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge varient="secondary-50-outline" size="S">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge varient="secondary-50-outline" size="M">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge varient="secondary-50-outline" size="L">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Filled Primary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge varient="primary-500" size="S">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge varient="primary-500" size="M">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge varient="primary-500" size="L">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Filled Secondary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge varient="secondary-400" size="S">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge varient="secondary-400" size="M">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge varient="secondary-400" size="L">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Dark</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge varient="gray-900" size="S">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge varient="gray-900" size="M">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge varient="gray-900" size="L">
            Badge
          </Badge>
        </Flex>
      </Flex>
    </>
  ),
};
