import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from './badge';

const BADGE_COLORS = [
  'Red',
  'Orange',
  'Amber',
  'Yellow',
  'Lime',
  'Green',
  'Emerald',
  'Teal',
  'Cyan',
  'Sky',
  'Blue',
  'Indigo',
  'Violet',
  'Purple',
  'Fuchsia',
  'Pink',
  'Rose',
] as const;

const BADGE_STATES = ['Default'] as const;

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: BADGE_COLORS,
      description: 'Badge color variant',
    },
    state: {
      control: 'select',
      options: BADGE_STATES,
      description: 'Badge state variant',
    },
    badgeContainer: {
      control: 'text',
      description: 'Badge text content',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'Amber',
    state: 'Default',
    badgeContainer: 'Badge',
  },
};

export const Error: Story = {
  args: {
    color: 'Red',
    state: 'Default',
    badgeContainer: 'ERROR',
  },
};

export const LongText: Story = {
  args: {
    color: 'Sky',
    state: 'Default',
    badgeContainer: 'ON PROCESS — This is a longer badge label',
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center justify-center max-w-[900px] p-6">
      {BADGE_COLORS.map((color) => (
        <Badge
          key={color}
          color={color}
          state="Default"
          badgeContainer={color}
        />
      ))}
    </div>
  ),
};


