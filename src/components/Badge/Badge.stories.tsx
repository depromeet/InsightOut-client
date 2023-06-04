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
      <Heading>Outlined Purple</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="outlined-purple" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="outlined-purple" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="outlined-purple" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Outlined Cyan</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="outlined-cyan" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="outlined-cyan" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="outlined-cyan" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Filled Purple</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="filled-purple" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="filled-purple" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="filled-purple" size="lg">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Heading>Filled Cyan</Heading>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Small</Heading>
        <Flex>
          <Badge style="filled-cyan" size="sm">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Medium</Heading>
        <Flex>
          <Badge style="filled-cyan" size="md">
            Badge
          </Badge>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'}>
        <Heading as={'h4'}>Large</Heading>
        <Flex>
          <Badge style="filled-cyan" size="lg">
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
