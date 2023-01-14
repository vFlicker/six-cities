import { renderWithProviders, screen } from '~/tests/render';

import { NoAuthList } from './no-auth-list';

describe('Component: NoAuthList', () => {
  it('should render correctly', () => {
    renderWithProviders(<NoAuthList />);

    expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
