import type { Meta, StoryObj } from '@storybook/react';

import Title from './Title';
import { Accordion, AccordionItem } from '@chakra-ui/react';

const meta: Meta<typeof Title> = {
  title: 'Resume/LNB/ResumeItem/Title',
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  render: (args) => (
    <Accordion>
      <AccordionItem borderRadius="10px">
        <Title {...args} />
      </AccordionItem>
    </Accordion>
  ),
  args: {
    selected: true,
  },
};
