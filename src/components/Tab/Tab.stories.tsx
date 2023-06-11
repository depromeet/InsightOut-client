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
        <Tab href="/?path=/story/components-tab--default-tab" size="sm">
          Tab
        </Tab>
      </Flex>
      <Heading as={'h4'}>Medium</Heading>
      <Flex>
        <Tab href="/?path=/story/components-tab--default-tab" size="md">
          Tab
        </Tab>
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
          href="/?path=/story/components-tab--default-tab"
          size="sm"
          badge={
            <Badge varient="gray100-outline" size="S">
              작성중
            </Badge>
          }>
          Tab
        </Tab>
      </Flex>
      <Heading as={'h4'}>Medium</Heading>
      <Flex>
        <Tab
          href="/?path=/story/components-tab--default-tab"
          size="md"
          badge={
            <Badge varient="gray100-outline" size="S">
              작성중
            </Badge>
          }>
          Tab
        </Tab>
      </Flex>
    </Flex>
  ),
};
