import { renderWithProviders, screen } from '~/tests';

import { FooterSection } from './index';

describe('Component: FooterSection', () => {
  it('should render correctly', () => {
    renderWithProviders(<FooterSection />);

    expect(screen.getByAltText(/6 cities logo/i)).toBeInTheDocument();
  });
});
