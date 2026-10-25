import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import TableCell from './TableCell';

describe('TableCell component', () => {
  test('renders cell content', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Web Development</TableCell>
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByText('Web Development')).toBeVisible();
  });

  test('changes background when disabled', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled>Disabled cell</TableCell>
          </tr>
        </tbody>
      </table>
    );

    expect(screen.getByText('Disabled cell')).toHaveStyleRule(
      'background-color',
      '#e5e7eb'
    );
  });
});