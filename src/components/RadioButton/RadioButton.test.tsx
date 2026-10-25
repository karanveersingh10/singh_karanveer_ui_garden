import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import RadioButton from './RadioButton';

describe('RadioButton component', () => {
  test('renders the radio button and label', () => {
    render(
      <RadioButton
        name="course"
        label="Web Development"
        value="web"
      />
    );

    expect(screen.getByText('Web Development')).toBeVisible();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  test('disables the radio button and changes background', () => {
    render(
      <RadioButton
        name="course"
        label="Disabled course"
        value="web"
        disabled
      />
    );

    expect(screen.getByRole('radio')).toBeDisabled();

    expect(
      screen.getByText('Disabled course').closest('label')
    ).toHaveStyleRule('background-color', '#e5e7eb');
  });
});