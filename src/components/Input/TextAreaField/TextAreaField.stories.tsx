import type { Meta, StoryObj } from '@storybook/react';

import TextAreaField from './TextAreaField';
import { Flex, Heading } from '@chakra-ui/react';

const meta: Meta<typeof TextAreaField> = {
  title: 'Components/TextAreaField',
  component: TextAreaField,
};

export default meta;

type Story = StoryObj<typeof TextAreaField>;

export const Default: Story = {
  render: (args) => <TextAreaField {...args} />,
  args: {
    placeholder: 'ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감',
  },
};

export const Example: Story = {
  render: () => (
    <Flex flexDirection={'column'} gap={5}>
      <Flex flexDirection={'column'} gap={10}>
        <TextAreaField placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextAreaField disabled placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextAreaField
          error
          errorMessage="답변을 작성해주세요!"
          placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감"
        />
        <TextAreaField value="개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
      </Flex>
      <Heading as="h4">Count</Heading>
      <Flex flexDirection={'column'} gap={10}>
        <TextAreaField showCount maxLength={100} placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextAreaField
          showCount
          maxLength={100}
          disabled
          placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감"
        />
        <TextAreaField
          showCount
          maxLength={100}
          error
          errorMessage="답변을 작성해주세요!"
          placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감"
        />
        <TextAreaField showCount maxLength={100} value="개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
      </Flex>
    </Flex>
  ),
};
