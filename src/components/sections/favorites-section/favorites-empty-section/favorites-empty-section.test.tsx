import { renderWithProviders, screen } from '~/tests/render';

import { FavoritesEmptySection } from './favorites-empty-section';

describe('Component: FavoritesEmptySection', () => {
  it('should render correctly', () => {
    renderWithProviders(<FavoritesEmptySection />);

    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });
});
