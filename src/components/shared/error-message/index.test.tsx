import { renderWithProviders, screen } from '~/tests';

import { ErrorMessage } from './index';

describe('Component: ErrorMessage', () => {
  it('should render correctly without props', () => {
    renderWithProviders(<ErrorMessage />);

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });

  it('should render correctly with props', () => {
    renderWithProviders(<ErrorMessage errorMessage="Mock text" />);
    expect(screen.getByText(/Mock text/i)).toBeInTheDocument();
  });
});
