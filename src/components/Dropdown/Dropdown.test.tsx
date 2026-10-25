import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Dropdown from './Dropdown';

const options = [
  { label: 'React', value: 'react' },
  { label: 'JavaScript', value: 'javascript' },
];

describe('Dropdown component', () => {
  test('renders the label and options', () => {
    render(<Dropdown label="Course" options={options} />);

    expect(screen.getByLabelText('Course')).toBeVisible();
    expect(
      screen.getByRole('option', { name: 'React' })
    ).toBeInTheDocument();
  });

  test('is disabled and changes background when disabled', () => {
    render(
      <Dropdown label="Course" options={options} disabled />
    );

    expect(screen.getByLabelText('Course')).toBeDisabled();
    expect(screen.getByLabelText('Course')).toHaveStyleRule(
      'background-color',
      '#e5e7eb'
    );
  });
});