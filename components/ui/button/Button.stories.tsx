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
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'l', 'xl'],
      description: 'Button size: xs, sm, base, l, xl',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled'],
      description: 'Button state: default, hover, focus, disabled',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline', 'plain'],
      description: 'Button variant: default, outline, plain',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Whether the button is icon-only',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story with controls (text button)
export const Default: Story = {
  args: {
    children: 'Button text',
    size: 'base',
    state: 'default',
    variant: 'default',
    disabled: false,
    iconOnly: false,
  },
};

// Default story for icon-only button
export const IconOnly: Story = {
  args: {
    icon: <PlusIcon className="w-4 h-4" />,
    size: 'base',
    state: 'default',
    variant: 'default',
    disabled: false,
    iconOnly: true,
  },
};

// All sizes and states showcase
export const AllVariations: Story = {
  render: () => {
    const variants: Array<'default' | 'outline' | 'plain'> = [
      'default',
      'outline',
      'plain',
    ];
    const sizes: Array<'xs' | 'sm' | 'base' | 'l' | 'xl'> = [
      'xs',
      'sm',
      'base',
      'l',
      'xl',
    ];
    const states: Array<'default' | 'hover' | 'focus' | 'disabled'> = [
      'default',
      'hover',
      'focus',
      'disabled',
    ];

    return (
      <div className="flex flex-col gap-12 p-8 bg-background-background-primary">
        {variants.map(variant => (
          <div key={variant} className="flex flex-col gap-8">
            <h3 className="text-lg font-semibold text-content-content-primary">
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
            </h3>
            {/* Header row with size labels */}
            <div className="flex gap-4 items-center">
              <div className="w-32 text-sm font-medium text-content-content-secondary">
                State
              </div>
              <div className="flex gap-4">
                {sizes.map(size => (
                  <div
                    key={size}
                    className="w-20 text-center text-sm font-medium text-content-content-secondary"
                  >
                    {size.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* State rows */}
            {states.map(state => (
              <div key={state} className="flex gap-4 items-center">
                <div className="w-32 text-sm text-content-content-secondary">
                  {state.charAt(0).toUpperCase() + state.slice(1)}
                </div>
                <div className="flex gap-4">
                  {sizes.map(size => (
                    <Button
                      key={`${variant}-${state}-${size}`}
                      variant={variant}
                      size={size}
                      state={state}
                    >
                      Button text
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

// Dark mode variations
export const DarkMode: Story = {
  render: () => {
    const variants: Array<'default' | 'outline' | 'plain'> = [
      'default',
      'outline',
      'plain',
    ];
    const sizes: Array<'xs' | 'sm' | 'base' | 'l' | 'xl'> = [
      'xs',
      'sm',
      'base',
      'l',
      'xl',
    ];
    const states: Array<'default' | 'hover' | 'focus' | 'disabled'> = [
      'default',
      'hover',
      'focus',
      'disabled',
    ];

    return (
      <div
        data-theme="dark"
        className="flex flex-col gap-12 p-8 bg-background-background-primary min-h-screen"
        style={{ backgroundColor: '#18181b' }}
      >
        {variants.map(variant => (
          <div key={variant} className="flex flex-col gap-8">
            <h3 
              className="text-lg font-semibold text-content-content-primary"
              style={{ color: '#ffffff' }}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant (Dark
              Mode)
            </h3>
            {/* Header row with size labels */}
            <div className="flex gap-4 items-center">
              <div 
                className="w-32 text-sm font-medium text-content-content-secondary"
                style={{ color: '#a1a1aa' }}
              >
                State
              </div>
              <div className="flex gap-4">
                {sizes.map(size => (
                  <div
                    key={size}
                    className="w-20 text-center text-sm font-medium text-content-content-secondary"
                    style={{ color: '#a1a1aa' }}
                  >
                    {size.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* State rows */}
            {states.map(state => (
              <div key={state} className="flex gap-4 items-center">
                <div 
                  className="w-32 text-sm text-content-content-secondary"
                  style={{ color: '#a1a1aa' }}
                >
                  {state.charAt(0).toUpperCase() + state.slice(1)}
                </div>
                <div className="flex gap-4">
                  {sizes.map(size => (
                    <Button
                      key={`dark-${variant}-${state}-${size}`}
                      variant={variant}
                      size={size}
                      state={state}
                    >
                      Button text
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

// Icon-only button variations
export const IconOnlyVariations: Story = {
  render: () => {
    const variants: Array<'default' | 'outline' | 'plain'> = [
      'default',
      'outline',
      'plain',
    ];
    const sizes: Array<'xs' | 'sm' | 'base' | 'l' | 'xl'> = [
      'xs',
      'sm',
      'base',
      'l',
      'xl',
    ];
    const states: Array<'default' | 'hover' | 'focus' | 'disabled'> = [
      'default',
      'hover',
      'focus',
      'disabled',
    ];

    return (
      <div className="flex flex-col gap-12 p-8 bg-background-background-primary">
        {variants.map(variant => (
          <div key={variant} className="flex flex-col gap-8">
            <h3 className="text-lg font-semibold text-content-content-primary">
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant (Icon
              Only)
            </h3>
            {/* Header row with size labels */}
            <div className="flex gap-4 items-center">
              <div className="w-32 text-sm font-medium text-content-content-secondary">
                State
              </div>
              <div className="flex gap-4">
                {sizes.map(size => (
                  <div
                    key={size}
                    className="w-8 text-center text-sm font-medium text-content-content-secondary"
                  >
                    {size.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* State rows */}
            {states.map(state => (
              <div key={state} className="flex gap-4 items-center">
                <div className="w-32 text-sm text-content-content-secondary">
                  {state.charAt(0).toUpperCase() + state.slice(1)}
                </div>
                <div className="flex gap-4">
                  {sizes.map(size => (
                    <Button
                      key={`icon-${variant}-${state}-${size}`}
                      variant={variant}
                      size={size}
                      state={state}
                      iconOnly={true}
                      icon={<PlusIcon className="w-4 h-4" />}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

// Icon-only button dark mode variations
export const IconOnlyDarkMode: Story = {
  render: () => {
    const variants: Array<'default' | 'outline' | 'plain'> = [
      'default',
      'outline',
      'plain',
    ];
    const sizes: Array<'xs' | 'sm' | 'base' | 'l' | 'xl'> = [
      'xs',
      'sm',
      'base',
      'l',
      'xl',
    ];
    const states: Array<'default' | 'hover' | 'focus' | 'disabled'> = [
      'default',
      'hover',
      'focus',
      'disabled',
    ];

    return (
      <div
        data-theme="dark"
        className="flex flex-col gap-12 p-8 bg-background-background-primary min-h-screen"
        style={{ backgroundColor: '#18181b' }}
      >
        {variants.map(variant => (
          <div key={variant} className="flex flex-col gap-8">
            <h3 
              className="text-lg font-semibold text-content-content-primary"
              style={{ color: '#ffffff' }}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant (Icon
              Only, Dark Mode)
            </h3>
            {/* Header row with size labels */}
            <div className="flex gap-4 items-center">
              <div 
                className="w-32 text-sm font-medium text-content-content-secondary"
                style={{ color: '#a1a1aa' }}
              >
                State
              </div>
              <div className="flex gap-4">
                {sizes.map(size => (
                  <div
                    key={size}
                    className="w-8 text-center text-sm font-medium text-content-content-secondary"
                    style={{ color: '#a1a1aa' }}
                  >
                    {size.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* State rows */}
            {states.map(state => (
              <div key={state} className="flex gap-4 items-center">
                <div 
                  className="w-32 text-sm text-content-content-secondary"
                  style={{ color: '#a1a1aa' }}
                >
                  {state.charAt(0).toUpperCase() + state.slice(1)}
                </div>
                <div className="flex gap-4">
                  {sizes.map(size => (
                    <Button
                      key={`dark-icon-${variant}-${state}-${size}`}
                      variant={variant}
                      size={size}
                      state={state}
                      iconOnly={true}
                      icon={<PlusIcon className="w-4 h-4" />}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};
