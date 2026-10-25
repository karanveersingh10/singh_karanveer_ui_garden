import type { Meta, StoryObj } from '@storybook/react';
import TableCell from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: 'Web Development',
    disabled: false,
  },
  render: (args) => (
    <table>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled cell',
    disabled: true,
  },
  render: (args) => (
    <table>
      <tbody>
        <tr>
          <TableCell {...args} />
        </tr>
      </tbody>
    </table>
  ),
};