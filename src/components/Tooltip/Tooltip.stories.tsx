import { Meta, StoryObj } from '@storybook/react';
import { Flex, Heading } from '@chakra-ui/react';
import Tooltip from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const StrongTooltip: Story = {
  args: { type: 'strong' },
  render: ({ ...args }) => (
    <Flex flexDirection={'column'} gap={20}>
      <Flex flexDirection={'column'} gap={5}>
        <Heading>Default Strong Tooltip</Heading>
        <Heading as={'h4'} size={'md'}>
          Center Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-top">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Center Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-bottom">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Right Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="right-top">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Right Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="right-bottom">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Left Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="left-top">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Left Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="left-bottom">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Side Left Center
        </Heading>
        <Flex>
          <Tooltip {...args} position="side-left-center">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Side Right Center
        </Heading>
        <Flex>
          <Tooltip {...args} position="side-right-center">
            TOOLTIP
          </Tooltip>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} gap={5}>
        <Heading>Multiline Strong Tooltip</Heading>
        <Heading as={'h4'} size={'md'}>
          Center Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-top">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Center Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-bottom">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Right Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="right-top">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Right Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="right-bottom">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Left Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="left-top">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Left Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="left-bottom">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Side Left Center
        </Heading>
        <Flex>
          <Tooltip {...args} position="side-left-center">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Side Right Center
        </Heading>
        <Flex>
          <Tooltip {...args} position="side-right-center">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  ),
};

export const LightTooltip: Story = {
  args: { type: 'light' },
  render: ({ ...args }) => (
    <Flex flexDirection={'column'} gap={20}>
      <Flex flexDirection={'column'} gap={5}>
        <Heading>Default Light Tooltip</Heading>
        <Heading as={'h4'} size={'md'}>
          Center Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-top">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Center Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-bottom">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Right Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="right-top">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Right Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="right-bottom">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Left Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="left-top">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Left Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="left-bottom">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Side Left Center
        </Heading>
        <Flex>
          <Tooltip {...args} position="side-left-center">
            TOOLTIP
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Side Right Center
        </Heading>
        <Flex>
          <Tooltip {...args} position="side-right-center">
            TOOLTIP
          </Tooltip>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} gap={5}>
        <Heading>Multiline Light Tooltip</Heading>
        <Heading as={'h4'} size={'md'}>
          Center Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-top">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Center Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-bottom">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Right Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="right-top">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Right Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="right-bottom">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Left Top
        </Heading>
        <Flex>
          <Tooltip {...args} position="left-top">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Left Bottom
        </Heading>
        <Flex>
          <Tooltip {...args} position="left-bottom">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Side Left Center
        </Heading>
        <Flex>
          <Tooltip {...args} position="side-left-center">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
        <Heading as={'h4'} size="md">
          Side Right Center
        </Heading>
        <Flex>
          <Tooltip {...args} position="side-right-center">
            일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  ),
};
