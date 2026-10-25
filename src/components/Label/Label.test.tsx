
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Label from './Label';

describe('Label component', () => {
  test('renders the label text', () => {
    render(<Label text="Email Address" />);

    expect(screen.getByText('Email Address')).toBeVisible();
  });

  test('changes text color when disabled', () => {
    render(<Label text="Disabled Label" disabled />);

    expect(screen.getByText('Disabled Label')).toHaveStyleRule(
      'color',
      '#888888'
    );
  });
});
