
import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    color: { control: 'color' },
    fontSize: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a sample paragraph for the Text component.',
    color: '#333333',
    fontSize: '16px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'This text is disabled.',
    color: '#333333',
    fontSize: '16px',
    disabled: true,
  },
};
