import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <h3>Tertiary</h3>
        <div className="flex gap-6 ">
          <Tag variant="tertiary" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="tertiary" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="tertiary" size="s3">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Primay</h3>
        <div className="flex gap-6 ">
          <Tag variant="primary" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary" size="s3">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Secondary</h3>
        <div className="flex gap-6 ">
          <Tag variant="secondary" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="secondary" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="secondary" size="s3">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Darkmode</h3>
        <div className="flex gap-6 ">
          <Tag variant="darkmode" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="darkmode" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="darkmode" size="s3">
            여기에키워드를써요
          </Tag>
        </div>
      </div>
    );
  },
};
