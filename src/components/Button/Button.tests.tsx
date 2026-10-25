
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Button from './Button';

describe('Button component', () => {
  test('renders the button', () => {
    render(<Button label="Click Me" />);

    expect(
      screen.getByRole('button', { name: 'Click Me' })
    ).toBeVisible();
  });

  test('changes background when disabled', () => {
    render(
      <Button label="Disabled Button" disabled />
    );

    expect(
      screen.getByRole('button', { name: 'Disabled Button' })
    ).toHaveStyleRule('background-color', '#bdbdbd');
  });
});
