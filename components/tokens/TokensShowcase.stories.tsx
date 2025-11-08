import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PrimitivesColors from './PrimitivesColors';
import SemanticColors from './SemanticColors';
import Dimensions from './Dimensions';

const meta = {
  title: 'Design Tokens',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primitives: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      <PrimitivesColors />
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      <SemanticColors />
    </div>
  ),
};

export const DimensionsShowcase: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      <Dimensions />
    </div>
  ),
};

export const AllTokens: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen space-y-12">
      <PrimitivesColors />
      <SemanticColors />
      <Dimensions />
    </div>
  ),
};

