import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import TableCell from '../TableCell';
import TableFooter from '../TableFooter';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <th>Name</th>
        <th>Course</th>
      </TableHeader>
      <tbody>
        <TableRow>
          <TableCell>Karanveer Singh</TableCell>
          <TableCell>Web Development</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Student Two</TableCell>
          <TableCell>Database Systems</TableCell>
        </TableRow>
      </tbody>
      <TableFooter>
        <td colSpan={2}>Total: 2 students</td>
      </TableFooter>
    </Table>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Table disabled>
      <TableHeader disabled>
        <th>Name</th>
        <th>Course</th>
      </TableHeader>
      <tbody>
        <TableRow disabled>
          <TableCell disabled>Karanveer Singh</TableCell>
          <TableCell disabled>Web Development</TableCell>
        </TableRow>
      </tbody>
      <TableFooter disabled>
        <td colSpan={2}>Table disabled</td>
      </TableFooter>
    </Table>
  ),
};