import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Web Development',
    description: 'Learn to build modern and responsive websites.',
    buttonText: 'Learn More',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Web Development',
    description: 'This card is currently disabled.',
    buttonText: 'Unavailable',
    disabled: true,
  },
};