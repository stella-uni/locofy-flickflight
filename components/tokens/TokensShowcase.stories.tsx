import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PrimitivesColors from './PrimitivesColors';
import SemanticColors from './SemanticColors';
import Dimensions from './Dimensions';
import Typography from './Typography';
import Effects from './Effects';
import Filters from './Filters';
import Heroicons from './Heroicons';

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

export const TypographyShowcase: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      <Typography />
    </div>
  ),
};

export const EffectsShowcase: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      <Effects />
    </div>
  ),
};

export const FiltersShowcase: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      <Filters />
    </div>
  ),
};

export const HeroiconsShowcase: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen">
      <Heroicons />
    </div>
  ),
};

export const AllTokens: Story = {
  render: () => (
    <div className="p-8 bg-background-background-primary min-h-screen space-y-12">
      <PrimitivesColors />
      <SemanticColors />
      <Dimensions />
      <Typography />
      <Effects />
      <Filters />
      <Heroicons />
    </div>
  ),
};

