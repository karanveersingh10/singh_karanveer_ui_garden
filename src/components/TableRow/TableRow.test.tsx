import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import TableRow from './TableRow';

describe('TableRow component', () => {
  test('renders row content', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Harman</td>
            <td>Active</td>
          </TableRow>
        </tbody>
      </table>
    );

    expect(screen.getByText('Harman')).toBeVisible();
    expect(screen.getByText('Active')).toBeVisible();
  });

  test('changes background when disabled', () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow disabled>
            <td>Disabled row</td>
          </TableRow>
        </tbody>
      </table>
    );

    expect(container.querySelector('tr')).toHaveStyleRule(
      'background-color',
      '#e5e7eb'
    );
  });
});