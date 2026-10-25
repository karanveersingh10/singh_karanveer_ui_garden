import type { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: 'course',
    label: 'Web Development',
    value: 'web',
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    name: 'course-disabled',
    label: 'Web Development',
    value: 'web',
    checked: false,
    disabled: true,
  },
};