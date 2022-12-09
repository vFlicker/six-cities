import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ErrorMessage } from './index';

describe('Component: ErrorMessage', () => {
  it('should render correctly without props', () => {
    render(<ErrorMessage />);

    expect(screen.getByText('There are problems, please try again later.'));
  });

  it('should render correctly with props', () => {
    render(<ErrorMessage errorMessage="Mock text" />);

    expect(screen.getByText('Mock text'));
  });
});
