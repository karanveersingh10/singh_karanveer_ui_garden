import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import TableFooter from './TableFooter';

describe('TableFooter component', () => {
  test('renders footer content', () => {
    render(
      <table>
        <TableFooter>
          <td>Total: 2 students</td>
        </TableFooter>
      </table>
    );

    expect(screen.getByText('Total: 2 students')).toBeVisible();
  });

  test('changes background when disabled', () => {
    const { container } = render(
      <table>
        <TableFooter disabled>
          <td>Disabled footer</td>
        </TableFooter>
      </table>
    );

    expect(container.querySelector('tfoot')).toHaveStyleRule(
      'background-color',
      '#e5e7eb'
    );
  });
});