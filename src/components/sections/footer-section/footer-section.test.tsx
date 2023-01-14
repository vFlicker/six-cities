import { renderWithProviders, screen } from '~/tests/render';

import { FooterSection } from './footer-section';

describe('Component: FooterSection', () => {
  it('should render correctly', () => {
    renderWithProviders(<FooterSection />);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });
});
