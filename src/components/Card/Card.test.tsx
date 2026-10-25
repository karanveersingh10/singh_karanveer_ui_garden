import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Card from './Card';

describe('Card component', () => {
  test('renders its title, description, and button', () => {
    render(
      <Card
        title="My Card"
        description="This is a card description."
      />
    );

    expect(
      screen.getByRole('heading', { name: 'My Card' })
    ).toBeVisible();

    expect(
      screen.getByText('This is a card description.')
    ).toBeVisible();

    expect(
      screen.getByRole('button', { name: 'Learn More' })
    ).toBeVisible();
  });

  test('changes background and disables button when disabled', () => {
    render(
      <Card
        title="Disabled Card"
        description="This card cannot be used."
        disabled
      />
    );

    expect(
      screen.getByText('Disabled Card').closest('article')
    ).toHaveStyleRule('background-color', '#e5e7eb');

    expect(screen.getByRole('button')).toBeDisabled();
  });
});