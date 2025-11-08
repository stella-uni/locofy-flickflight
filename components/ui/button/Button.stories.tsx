import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { PlusIcon } from '@heroicons/react/24/outline';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'plain', 'outline'],
      description: 'Button type: default (Primary), plain (Secondary/Ghost), outline',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'l', 'xl'],
      description: 'Button size: xs, sm, base, l, xl',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether the button shows only an icon',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Light Mode - Complete Grid
export const LightMode: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-content-content-primary">Light Mode</h2>
      
      {/* Grid: 10 rows x 8 columns */}
      <div className="space-y-6">
        {/* Row 1: Default Type, Default State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Default, Default</div>
          <div className="flex gap-4">
            {/* Icon Only - 3 columns */}
            <Button type="default" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            <Button type="default" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            <Button type="default" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            {/* Text Only - 5 columns */}
            <Button type="default" size="xs">Button text</Button>
            <Button type="default" size="sm">Button text</Button>
            <Button type="default" size="base">Button text</Button>
            <Button type="default" size="l">Button text</Button>
            <Button type="default" size="xl">Button text</Button>
          </div>
        </div>

        {/* Row 2: Outline Type, Default State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Outline, Default</div>
          <div className="flex gap-4">
            <Button type="outline" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            <Button type="outline" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            <Button type="outline" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            <Button type="outline" size="xs">Button text</Button>
            <Button type="outline" size="sm">Button text</Button>
            <Button type="outline" size="base">Button text</Button>
            <Button type="outline" size="l">Button text</Button>
            <Button type="outline" size="xl">Button text</Button>
          </div>
        </div>

        {/* Row 3: Default Type, Hover/Focus State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Default, Hover/Focus</div>
          <div className="flex gap-4">
            <Button type="default" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="ring-2 ring-border-extensions-border-info ring-offset-2" />
            <Button type="default" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="ring-2 ring-border-extensions-border-info ring-offset-2" />
            <Button type="default" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="ring-2 ring-border-extensions-border-info ring-offset-2" />
            <Button type="default" size="xs" className="ring-2 ring-border-extensions-border-info ring-offset-2">Button text</Button>
            <Button type="default" size="sm" className="ring-2 ring-border-extensions-border-info ring-offset-2">Button text</Button>
            <Button type="default" size="base" className="ring-2 ring-border-extensions-border-info ring-offset-2">Button text</Button>
            <Button type="default" size="l" className="ring-2 ring-border-extensions-border-info ring-offset-2">Button text</Button>
            <Button type="default" size="xl" className="ring-2 ring-border-extensions-border-info ring-offset-2">Button text</Button>
          </div>
        </div>

        {/* Row 4: Default Type, Disabled State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Default, Disabled</div>
          <div className="flex gap-4">
            <Button type="default" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="default" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="default" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="default" size="xs" disabled>Button text</Button>
            <Button type="default" size="sm" disabled>Button text</Button>
            <Button type="default" size="base" disabled>Button text</Button>
            <Button type="default" size="l" disabled>Button text</Button>
            <Button type="default" size="xl" disabled>Button text</Button>
          </div>
        </div>

        {/* Row 5: Plain Type, Disabled State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Plain, Disabled</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="plain" size="xs" disabled>Button text</Button>
            <Button type="plain" size="sm" disabled>Button text</Button>
            <Button type="plain" size="base" disabled>Button text</Button>
            <Button type="plain" size="l" disabled>Button text</Button>
            <Button type="plain" size="xl" disabled>Button text</Button>
          </div>
        </div>

        {/* Row 6: Plain Type, Default State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Plain, Default</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} />
            <Button type="plain" size="xs">Button text</Button>
            <Button type="plain" size="sm">Button text</Button>
            <Button type="plain" size="base">Button text</Button>
            <Button type="plain" size="l">Button text</Button>
            <Button type="plain" size="xl">Button text</Button>
          </div>
        </div>

        {/* Row 7: Outline Type, Primary Color, Default State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Outline Primary</div>
          <div className="flex gap-4">
            <Button type="outline" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4 text-border-extensions-border-info" />} className="border-border-extensions-border-info" />
            <Button type="outline" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4 text-border-extensions-border-info" />} className="border-border-extensions-border-info" />
            <Button type="outline" size="base" iconOnly icon={<PlusIcon className="w-4 h-4 text-border-extensions-border-info" />} className="border-border-extensions-border-info" />
            <Button type="outline" size="xs" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
            <Button type="outline" size="sm" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
            <Button type="outline" size="base" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
            <Button type="outline" size="l" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
            <Button type="outline" size="xl" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
          </div>
        </div>

        {/* Row 8: Plain Type, Default State, Larger */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Plain, Larger</div>
          <div className="flex gap-4">
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-5 h-5" />} />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-5 h-5" />} />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-6 h-6" />} />
            <Button type="plain" size="l">Button text</Button>
            <Button type="plain" size="xl">Button text</Button>
            <Button type="plain" size="xl">Button text</Button>
            <Button type="plain" size="xl">Button text</Button>
            <Button type="plain" size="xl">Button text</Button>
          </div>
        </div>

        {/* Row 9: Outline Type, Primary Color, Default State, Larger */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Outline Primary, Larger</div>
          <div className="flex gap-4">
            <Button type="outline" size="l" iconOnly icon={<PlusIcon className="w-5 h-5 text-border-extensions-border-info" />} className="border-border-extensions-border-info" />
            <Button type="outline" size="xl" iconOnly icon={<PlusIcon className="w-5 h-5 text-border-extensions-border-info" />} className="border-border-extensions-border-info" />
            <Button type="outline" size="xl" iconOnly icon={<PlusIcon className="w-6 h-6 text-border-extensions-border-info" />} className="border-border-extensions-border-info" />
            <Button type="outline" size="l" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
            <Button type="outline" size="xl" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
            <Button type="outline" size="xl" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
            <Button type="outline" size="xl" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
            <Button type="outline" size="xl" className="border-border-extensions-border-info text-border-extensions-border-info">Button text</Button>
          </div>
        </div>

        {/* Row 10: Plain Type, Disabled State (repeat) */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-secondary">Plain, Disabled</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled />
            <Button type="plain" size="xs" disabled>Button text</Button>
            <Button type="plain" size="sm" disabled>Button text</Button>
            <Button type="plain" size="base" disabled>Button text</Button>
            <Button type="plain" size="l" disabled>Button text</Button>
            <Button type="plain" size="xl" disabled>Button text</Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Dark Mode - Complete Grid
export const DarkMode: Story = {
  render: () => (
    <div className="p-8 bg-background-background-inverse-primary min-h-screen" data-theme="dark">
      <h2 className="text-2xl font-bold mb-8 text-content-content-inverse-primary">Dark Mode</h2>
      
      {/* Grid: 9 rows x 10 columns */}
      <div className="space-y-6">
        {/* Row 1: Subtle Default State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Subtle Default</div>
          <div className="flex gap-4">
            {/* Icon Only - 5 columns */}
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary" />
            {/* Text Only - 5 columns */}
            <Button type="plain" size="xs" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="sm" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="base" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="l" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="xl" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
          </div>
        </div>

        {/* Row 2: Default/Hover State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Default/Hover</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="xs" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="sm" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="base" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="l" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="xl" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
          </div>
        </div>

        {/* Row 3: Active/Focused State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Active/Focused</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="xs" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
            <Button type="plain" size="sm" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
            <Button type="plain" size="base" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
            <Button type="plain" size="l" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
            <Button type="plain" size="xl" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
          </div>
        </div>

        {/* Row 4: Light Disabled/Ghost State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Light Disabled</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/50" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/50" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/50" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/50" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/50" />
            <Button type="plain" size="xs" disabled className="bg-background-background-inverse-secondary/50 text-content-content-inverse-tertiary">Button text</Button>
            <Button type="plain" size="sm" disabled className="bg-background-background-inverse-secondary/50 text-content-content-inverse-tertiary">Button text</Button>
            <Button type="plain" size="base" disabled className="bg-background-background-inverse-secondary/50 text-content-content-inverse-tertiary">Button text</Button>
            <Button type="plain" size="l" disabled className="bg-background-background-inverse-secondary/50 text-content-content-inverse-tertiary">Button text</Button>
            <Button type="plain" size="xl" disabled className="bg-background-background-inverse-secondary/50 text-content-content-inverse-tertiary">Button text</Button>
          </div>
        </div>

        {/* Row 5: Medium Disabled/Ghost State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Medium Disabled</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/30" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/30" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/30" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/30" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-background-background-inverse-secondary/30" />
            <Button type="plain" size="xs" disabled className="bg-background-background-inverse-secondary/30 text-content-content-inverse-tertiary">Button text</Button>
            <Button type="plain" size="sm" disabled className="bg-background-background-inverse-secondary/30 text-content-content-inverse-tertiary">Button text</Button>
            <Button type="plain" size="base" disabled className="bg-background-background-inverse-secondary/30 text-content-content-inverse-tertiary">Button text</Button>
            <Button type="plain" size="l" disabled className="bg-background-background-inverse-secondary/30 text-content-content-inverse-tertiary">Button text</Button>
            <Button type="plain" size="xl" disabled className="bg-background-background-inverse-secondary/30 text-content-content-inverse-tertiary">Button text</Button>
          </div>
        </div>

        {/* Row 6: Emphasized Default/Hover State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Emphasized Default</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary" />
            <Button type="plain" size="xs" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="sm" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="base" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="l" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
            <Button type="plain" size="xl" className="bg-background-background-inverse-secondary text-content-content-inverse-primary">Button text</Button>
          </div>
        </div>

        {/* Row 7: Active/Focused - Emphasized State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Active/Focused Emph</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info" />
            <Button type="plain" size="xs" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
            <Button type="plain" size="sm" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
            <Button type="plain" size="base" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
            <Button type="plain" size="l" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
            <Button type="plain" size="xl" className="bg-background-background-inverse-secondary text-content-content-inverse-primary ring-2 ring-border-extensions-border-info">Button text</Button>
          </div>
        </div>

        {/* Row 8: Heavy Disabled/Ghost State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Heavy Disabled</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-20" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-20" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-20" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-20" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-20" />
            <Button type="plain" size="xs" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-20">Button text</Button>
            <Button type="plain" size="sm" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-20">Button text</Button>
            <Button type="plain" size="base" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-20">Button text</Button>
            <Button type="plain" size="l" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-20">Button text</Button>
            <Button type="plain" size="xl" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-20">Button text</Button>
          </div>
        </div>

        {/* Row 9: Text-Only / Fully Disabled State */}
        <div className="flex gap-4 items-center">
          <div className="w-32 text-sm text-content-content-inverse-secondary">Fully Disabled</div>
          <div className="flex gap-4">
            <Button type="plain" size="xs" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-10" />
            <Button type="plain" size="sm" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-10" />
            <Button type="plain" size="base" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-10" />
            <Button type="plain" size="l" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-10" />
            <Button type="plain" size="xl" iconOnly icon={<PlusIcon className="w-4 h-4" />} disabled className="bg-transparent border-0 opacity-10" />
            <Button type="plain" size="xs" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-10">Button text</Button>
            <Button type="plain" size="sm" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-10">Button text</Button>
            <Button type="plain" size="base" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-10">Button text</Button>
            <Button type="plain" size="l" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-10">Button text</Button>
            <Button type="plain" size="xl" disabled className="bg-transparent border-0 text-content-content-inverse-tertiary opacity-10">Button text</Button>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Default story with controls
export const Default: Story = {
  args: {
    children: 'Button',
    type: 'default',
    size: 'base',
    iconOnly: false,
    disabled: false,
  },
};
