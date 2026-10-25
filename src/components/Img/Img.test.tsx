import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Img from './Img';

describe('Img component', () => {
  test('renders an image with alternative text', () => {
    render(
      <Img
        src="sample.jpg"
        alt="Sample landscape"
      />
    );

    expect(
      screen.getByRole('img', { name: 'Sample landscape' })
    ).toBeVisible();
  });

  test('reduces opacity when disabled', () => {
    render(
      <Img
        src="sample.jpg"
        alt="Disabled landscape"
        disabled
      />
    );

    expect(
      screen.getByRole('img', { name: 'Disabled landscape' })
    ).toHaveStyleRule('opacity', '0.45');
  });
});