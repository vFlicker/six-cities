import { renderWithProviders, screen } from '~/tests';

import { NoAuthList } from './index';

describe('Component: NoAuthList', () => {
  it('should render correctly', () => {
    renderWithProviders(<NoAuthList />);

    expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
