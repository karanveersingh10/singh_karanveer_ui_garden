
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Text from './Text';

describe('Text component', () => {
  test('renders the text content', () => {
    render(<Text>Sample paragraph</Text>);

    expect(screen.getByText('Sample paragraph')).toBeVisible();
  });

  test('changes text color when disabled', () => {
    render(<Text disabled>Disabled paragraph</Text>);

    expect(screen.getByText('Disabled paragraph')).toHaveStyleRule(
      'color',
      '#888888'
    );
  });
});
