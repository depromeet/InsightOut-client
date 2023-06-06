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
        <h3>Primay-50</h3>
        <div className="flex gap-6 ">
          <Tag variant="primary-50" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary-50" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary-50" size="s3">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Primay-500</h3>
        <div className="flex gap-6 ">
          <Tag variant="primary-500" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary-500" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary-500" size="s3">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Primay-outline</h3>
        <div className="flex gap-6 ">
          <Tag variant="primary-outline" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary-outline" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary-outline" size="s3">
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
        <h3>Secondary-outline</h3>
        <div className="flex gap-6 ">
          <Tag variant="secondary-outline" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="secondary-outline" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="secondary-outline" size="s3">
            여기에키워드를써요
          </Tag>
        </div>
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
        <h3>Gray-800</h3>
        <div className="flex gap-6 ">
          <Tag variant="gray-800" size="s1">
            여기에키워드를써요
          </Tag>
          <Tag variant="gray-800" size="s2">
            여기에키워드를써요
          </Tag>
          <Tag variant="gray-800" size="s3">
            여기에키워드를써요
          </Tag>
        </div>
      </div>
    );
  },
};
