import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  argTypes: {
    sideNumPagesToShow: {
      type: 'number',
    },
    current: {
      type: 'number',
    },
    total: {
      type: 'number',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Base: Story = {
  args: {
    current: 1,
    total: 20,
    sideNumPagesToShow: 4,
  },
  render: function MyFunc({ ...args }) {
    const [_, updateArgs] = useArgs();
    return (
      <Pagination
        {...args}
        onClick={(value) => {
          updateArgs({
            current: value,
          });
        }}
      ></Pagination>
    );
  },
};
