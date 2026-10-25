import type { Meta, StoryObj } from '@storybook/react';
import TableHeader from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    children: (
      <>
        <th>Name</th>
        <th>Course</th>
        <th>Status</th>
      </>
    ),
    disabled: false,
  },
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <TableHeader {...args} />
    </table>
  ),
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <th>Name</th>
        <th>Course</th>
        <th>Status</th>
      </>
    ),
    disabled: true,
  },
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <TableHeader {...args} />
    </table>
  ),
};