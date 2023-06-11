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
          <Tag variant="primary50" size="S">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary50" size="M">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary50" size="L">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Primay-500</h3>
        <div className="flex gap-6 ">
          <Tag variant="primary500" size="S">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary500" size="M">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary500" size="L">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Primay-outline</h3>
        <div className="flex gap-6 ">
          <Tag variant="primary50-outline" size="S">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary50-outline" size="M">
            여기에키워드를써요
          </Tag>
          <Tag variant="primary50-outline" size="L">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Secondary</h3>
        <div className="flex gap-6 ">
          <Tag variant="secondary500" size="S">
            여기에키워드를써요
          </Tag>
          <Tag variant="secondary500" size="M">
            여기에키워드를써요
          </Tag>
          <Tag variant="secondary500" size="L">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Secondary-outline</h3>
        <div className="flex gap-6 ">
          <Tag variant="secondary50-outline" size="S">
            여기에키워드를써요
          </Tag>
          <Tag variant="secondary50-outline" size="M">
            여기에키워드를써요
          </Tag>
          <Tag variant="secondary50-outline" size="L">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Tertiary</h3>
        <div className="flex gap-6 ">
          <Tag variant="gray100" size="S">
            여기에키워드를써요
          </Tag>
          <Tag variant="gray100" size="M">
            여기에키워드를써요
          </Tag>
          <Tag variant="gray100" size="L">
            여기에키워드를써요
          </Tag>
        </div>
        <h3>Gray-800</h3>
        <div className="flex gap-6 ">
          <Tag variant="gray800" size="S">
            여기에키워드를써요
          </Tag>
          <Tag variant="gray800" size="M">
            여기에키워드를써요
          </Tag>
          <Tag variant="gray800" size="L">
            여기에키워드를써요
          </Tag>
        </div>
      </div>
    );
  },
};
