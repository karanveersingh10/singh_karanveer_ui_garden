
import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Email Address',
    color: '#222222',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Email Address (Disabled)',
    color: '#222222',
    disabled: true,
  },
};
