import { Flex, Heading } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';

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
      <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
        <Heading>Default Strong Tooltip</Heading>
        <Heading as={'h2'} size={'md'}>
          툴팁은 마우스를 hover 해서 볼 수 있습니다.
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-top" content="This is tooltip">
            CENTER TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="center-bottom" content="This is tooltip">
            CENTER BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-top" content="This is tooltip">
            RIGHT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-bottom" content="This is tooltip">
            RIGHT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-top" content="This is tooltip">
            LEFT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-bottom" content="This is tooltip">
            LEFT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-left-center" content="This is tooltip">
            SIDE LEFT CENTER TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-right-center" content="This is tooltip">
            SIDE RIGHT CENTER TOOLTIP
          </Tooltip>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
        <Heading>Multiline Strong Tooltip</Heading>
        <Heading as={'h2'} size={'md'}>
          툴팁은 마우스를 hover 해서 볼 수 있습니다.
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-top" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            CENTER TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="center-bottom" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            CENTER BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-top" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            RIGHT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-bottom" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            RIGHT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-top" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            LEFT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-bottom" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            LEFT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-left-center" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            SIDE LEFT CENTER TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-right-center" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            SIDE RIGHT CENTER TOOLTIP
          </Tooltip>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
        <Heading>Always Opened Strong Tooltip</Heading>
        <Flex>
          <Tooltip {...args} position="center-top" content="This is tooltip" alwaysOpen>
            CENTER TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="center-bottom" content="This is tooltip" alwaysOpen>
            CENTER BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-top" content="This is tooltip" alwaysOpen>
            RIGHT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-bottom" content="This is tooltip" alwaysOpen>
            RIGHT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-top" content="This is tooltip" alwaysOpen>
            LEFT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-bottom" content="This is tooltip" alwaysOpen>
            LEFT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-left-center" content="This is tooltip" alwaysOpen>
            SIDE LEFT CENTER TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-right-center" content="This is tooltip" alwaysOpen>
            SIDE RIGHT CENTER TOOLTIP
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
      <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
        <Heading>Default Light Tooltip</Heading>
        <Heading as={'h2'} size={'md'}>
          툴팁은 마우스를 hover 해서 볼 수 있습니다.
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-top" content="This is tooltip">
            CENTER TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="center-bottom" content="This is tooltip">
            CENTER BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-top" content="This is tooltip">
            RIGHT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-bottom" content="This is tooltip">
            RIGHT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-top" content="This is tooltip">
            LEFT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-bottom" content="This is tooltip">
            LEFT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-left-center" content="This is tooltip">
            SIDE LEFT CENTER TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-right-center" content="This is tooltip">
            SIDE RIGHT CENTER TOOLTIP
          </Tooltip>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
        <Heading>Multiline Light Tooltip</Heading>
        <Heading as={'h2'} size={'md'}>
          툴팁은 마우스를 hover 해서 볼 수 있습니다.
        </Heading>
        <Flex>
          <Tooltip {...args} position="center-top" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            CENTER TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="center-bottom" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            CENTER BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-top" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            RIGHT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-bottom" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            RIGHT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-top" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            LEFT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-bottom" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            LEFT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-left-center" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            SIDE LEFT CENTER TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-right-center" content="일이삼사오육칠팔구십일이삼사오육칠팔구십">
            SIDE RIGHT CENTER TOOLTIP
          </Tooltip>
        </Flex>
      </Flex>
      <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
        <Heading>Always Opened Light Tooltip</Heading>
        <Flex>
          <Tooltip {...args} position="center-top" content="This is tooltip" alwaysOpen>
            CENTER TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="center-bottom" content="This is tooltip" alwaysOpen>
            CENTER BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-top" content="This is tooltip" alwaysOpen>
            RIGHT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="right-bottom" content="This is tooltip" alwaysOpen>
            RIGHT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-top" content="This is tooltip" alwaysOpen>
            LEFT TOP TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="left-bottom" content="This is tooltip" alwaysOpen>
            LEFT BOTTOM TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-left-center" content="This is tooltip" alwaysOpen>
            SIDE LEFT CENTER TOOLTIP
          </Tooltip>
        </Flex>
        <Flex>
          <Tooltip {...args} position="side-right-center" content="This is tooltip" alwaysOpen>
            SIDE RIGHT CENTER TOOLTIP
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  ),
};
