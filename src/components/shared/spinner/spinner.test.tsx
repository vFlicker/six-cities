import { renderWithProviders, screen } from '~/tests/render';

import { Spinner } from './spinner';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    renderWithProviders(<Spinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
