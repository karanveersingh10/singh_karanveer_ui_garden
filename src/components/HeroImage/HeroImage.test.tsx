import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import HeroImage from './HeroImage';

describe('HeroImage component', () => {
  test('renders the title and subtitle', () => {
    render(
      <HeroImage
        src="sample.jpg"
        title="Welcome"
        subtitle="Discover something new"
      />
    );

    expect(
      screen.getByRole('heading', { name: 'Welcome' })
    ).toBeVisible();

    expect(screen.getByText('Discover something new')).toBeVisible();
  });

  test('changes opacity when disabled', () => {
    render(
      <HeroImage
        src="sample.jpg"
        title="Disabled banner"
        disabled
      />
    );

    expect(screen.getByLabelText('Disabled banner')).toHaveStyleRule(
      'opacity',
      '0.7'
    );
  });
});