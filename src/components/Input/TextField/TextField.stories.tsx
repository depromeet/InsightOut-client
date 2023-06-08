import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@chakra-ui/react';

import TextField from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    mode: 'default',
    chipTitle: '나의 역할',
  },
};

export const Example: Story = {
  render: () => (
    <Flex flexDirection={'column'} gap={5}>
      <Flex flexDirection={'column'} gap={10}>
        <TextField placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextField disabled placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감" />
        <TextField
          error
          errorMessage="답변을 작성해주세요!"
          placeholder="ex.개발자와 협업 역량을 쌓기 위해 it 동아리에 들어감"
        />
        <TextField readOnly value="Readonly TextField" />
      </Flex>
    </Flex>
  ),
};
