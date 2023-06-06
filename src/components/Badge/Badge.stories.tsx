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
          <Badge style="tertiary" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="tertiary" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="tertiary" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Outlined Primary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="outlined-primary" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="outlined-primary" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="outlined-primary" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Outlined Secondary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="outlined-secondary" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="outlined-secondary" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="outlined-secondary" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Filled Primary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="filled-primary" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="filled-primary" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="filled-primary" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Filled Secondary</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="filled-secondary" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="filled-secondary" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="filled-secondary" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Dark</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="dark" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="dark" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="dark" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
    </>
  ),
};
