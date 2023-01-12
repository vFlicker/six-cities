import { renderWithProviders, screen } from '~/tests';

import { NotFoundSection } from './not-found-section';

describe('Component: NotFoundSection', () => {
  it('should render correctly', () => {
    const alt = 'No results icon';
    const description = 'Page not found';
    const title = 'The page you are looking for does not exist';

    renderWithProviders(<NotFoundSection />);

    expect(screen.getByAltText(new RegExp(alt, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(description, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
  });
});
