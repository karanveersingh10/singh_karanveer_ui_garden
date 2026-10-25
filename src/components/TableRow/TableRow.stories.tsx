import type { Meta, StoryObj } from '@storybook/react';
import TableRow from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    children: (
      <>
        <td>Harman</td>
        <td>Web Development</td>
        <td>Active</td>
      </>
    ),
    disabled: false,
  },
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow {...args} />
      </tbody>
    </table>
  ),
};

export const Disabled: Story = {
  args: {
    children: (
      <>
        <td>Harman</td>
        <td>Web Development</td>
        <td>Disabled</td>
      </>
    ),
    disabled: true,
  },
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <tbody>
        <TableRow {...args} />
      </tbody>
    </table>
  ),
};