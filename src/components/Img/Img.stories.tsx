import type { Meta, StoryObj } from '@storybook/react';
import Img from './Img';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/600x400?text=Sample+Image',
    alt: 'Sample landscape',
    width: '300px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://placehold.co/600x400?text=Disabled+Image',
    alt: 'Disabled sample image',
    width: '300px',
    disabled: true,
  },
};