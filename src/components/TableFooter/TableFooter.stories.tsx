import type { Meta, StoryObj } from '@storybook/react';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    children: <td>Total: 2 students</td>,
    disabled: false,
  },
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <TableFooter {...args} />
    </table>
  ),
};

export const Disabled: Story = {
  args: {
    children: <td>Table footer disabled</td>,
    disabled: true,
  },
  render: (args) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <TableFooter {...args} />
    </table>
  ),
};