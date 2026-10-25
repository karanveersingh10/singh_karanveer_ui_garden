import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const options = [
  { label: 'Web Development', value: 'web' },
  { label: 'Database Systems', value: 'database' },
  { label: 'Programming', value: 'programming' },
];

export const Default: Story = {
  args: {
    label: 'Choose a course',
    options,
    value: '',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Choose a course',
    options,
    value: '',
    disabled: true,
  },
};