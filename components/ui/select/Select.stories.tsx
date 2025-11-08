import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const Default: Story = {
  args: {
    placeholder: 'Select an option',
    options,
    style: { width: 200 },
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'option1',
    options,
    style: { width: 200 },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled select',
    disabled: true,
    options,
    style: { width: 200 },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '300px' }}>
      <Select placeholder="Small select" size="small" options={options} />
      <Select placeholder="Middle select" size="middle" options={options} />
      <Select placeholder="Large select" size="large" options={options} />
    </div>
  ),
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    placeholder: 'Select multiple options',
    options,
    style: { width: 300 },
  },
};

