import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Table from './Table';

describe('Table component', () => {
  test('renders table content', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Student Name</td>
          </tr>
        </tbody>
      </Table>
    );

    expect(screen.getByText('Student Name')).toBeVisible();
  });

  test('changes background when disabled', () => {
    const { container } = render(
      <Table disabled>
        <tbody>
          <tr>
            <td>Disabled table</td>
          </tr>
        </tbody>
      </Table>
    );

    expect(container.querySelector('table')).toHaveStyleRule(
      'background-color',
      '#e5e7eb'
    );
  });
});