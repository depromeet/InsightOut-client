import { Flex, Heading } from '@chakra-ui/react';
import Tab from './Tab';
import { Meta, StoryObj } from '@storybook/react';
import Badge from '../Badge/Badge';

const meta = {
  title: 'Components/Tab',
  component: Tab,
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const DefaultTab: Story = {
  render: () => (
    <Flex flexDirection={'column'} gap={10}>
      <Heading as={'h4'}>Small</Heading>
      <Flex>
        <Tab size="sm">Tab</Tab>
      </Flex>
      <Heading as={'h4'}>Medium</Heading>
      <Flex>
        <Tab size="md">Tab</Tab>
      </Flex>
    </Flex>
  ),
};

export const TabWithBadge: Story = {
  render: () => (
    <Flex flexDirection={'column'} gap={10}>
      <Heading as={'h4'}>Small</Heading>
      <Flex>
        <Tab
          size="sm"
          badge={
            <Badge style="tertiary" size="sm">
              작성중
            </Badge>
          }>
          Tab
        </Tab>
      </Flex>
      <Heading as={'h4'}>Medium</Heading>
      <Flex>
        <Tab
          size="md"
          badge={
            <Badge style="tertiary" size="sm">
              작성중
            </Badge>
          }>
          Tab
        </Tab>
      </Flex>
    </Flex>
  ),
};
