import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './select';
import type { SelectOption } from './type';

const meta: Meta<typeof Select> = {
  component: Select,
  argTypes: {
    width: {
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    placeholderIcon: {
      type: 'string',
    },
    defaultOptionId: {
      type: 'string',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Select>;

const optionsList = [
  { id: '1', value: '選択肢A', icon: 'add' },
  { id: '2', value: '選択肢B', icon: 'add' },
  { id: '3', value: '選択肢C', icon: 'add' },
] as SelectOption[];

export const Base: Story = {
  render: ({ ...args }) => (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '80px', marginBottom: '200px' }}>
        <Select {...args} size="small" variant="outline" options={optionsList} />
        <Select {...args} size="small-medium" variant="outline" options={optionsList} />
        <Select {...args} size="medium" variant="outline" options={optionsList} />
        <Select {...args} size="large" variant="outline" options={optionsList} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
        <Select {...args} size="small" variant="text" options={optionsList} />
        <Select {...args} size="small-medium" variant="text" options={optionsList} />
        <Select {...args} size="medium" variant="text" options={optionsList} />
        <Select {...args} size="large" variant="text" options={optionsList} />
      </div>
    </>
  ),
};
