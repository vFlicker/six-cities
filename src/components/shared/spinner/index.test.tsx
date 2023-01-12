import { renderWithProviders, screen } from '~/tests';

import { Spinner } from './index';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    renderWithProviders(<Spinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
