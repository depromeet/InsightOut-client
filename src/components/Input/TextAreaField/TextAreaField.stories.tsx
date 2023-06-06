import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@chakra-ui/react';

import TextAreaField from './TextAreaField';

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
    <Flex flexDirection={'column'} gap={10}>
      <TextAreaField autoSize placeholder="Default" />
      <TextAreaField disabled placeholder="Disabled" />
      <TextAreaField chipTitle="Chip Title" placeholder="chipTitle 속성에 문자열을 넣어보세요" />
      <TextAreaField
        error
        errorMessage="에러 메시지"
        placeholder="error 속성과 errorMessage 속성을 함께 전달해주세요"
      />
      <TextAreaField value="Typed" />
      <TextAreaField readOnly value="Readonly" />
      <TextAreaField maxLength={100} placeholder="showCount 속성과 maxLength를 함께 전달해주세요" />
    </Flex>
  ),
};
