import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PlusIcon } from '@heroicons/react/24/outline';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'plain', 'outline'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'l', 'xl'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <PlusIcon className="w-4 h-4" />,
    type: 'default',
    size: 'base',
    disabled: false,
  },
};
