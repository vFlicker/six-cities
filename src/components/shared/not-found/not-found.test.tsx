import { renderWithProviders, screen } from '~/tests/render';

import { NotFound } from './not-found';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const alt = 'Test alt text';
    const description = 'Test description';
    const title = 'Test title';

    renderWithProviders(
      <NotFound iconSrc="" alt={alt} description={description} title={title} />,
    );

    expect(screen.getByAltText(new RegExp(alt, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(description, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
  });
});
