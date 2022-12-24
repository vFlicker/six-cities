import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Mark } from './index';

describe('Component: Mark', () => {
  it('should render correctly', () => {
    render(<Mark type="big" />);

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
  });
});
