import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/1200x400?text=Explore+the+World',
    title: 'Explore the World',
    subtitle: 'Discover new places and experiences.',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://placehold.co/1200x400?text=Disabled+Banner',
    title: 'Explore the World',
    subtitle: 'This banner is disabled.',
    disabled: true,
  },
};