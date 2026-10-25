import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import TableHeader from './TableHeader';

describe('TableHeader component', () => {
  test('renders table headings', () => {
    render(
      <table>
        <TableHeader>
          <th>Name</th>
          <th>Course</th>
        </TableHeader>
      </table>
    );

    expect(screen.getByText('Name')).toBeVisible();
    expect(screen.getByText('Course')).toBeVisible();
  });

  test('changes background when disabled', () => {
    const { container } = render(
      <table>
        <TableHeader disabled>
          <th>Name</th>
        </TableHeader>
      </table>
    );

    expect(container.querySelector('thead')).toHaveStyleRule(
      'background-color',
      '#e5e7eb'
    );
  });
});