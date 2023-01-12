import { renderWithProviders, screen } from '~/tests';

import { StarRating } from './index';

const rating = 4;

describe('Component: StarRating', () => {
  it('should render without text', () => {
    renderWithProviders(<StarRating width={98} height={16} rating={rating} />);

    expect(
      screen.queryByText(new RegExp(rating.toString(), 'i')),
    ).not.toBeInTheDocument();

    expect(screen.getByTestId('star')).toBeInTheDocument();
  });

  it('should render with text', () => {
    renderWithProviders(
      <StarRating width={98} height={16} rating={rating} hasText={true} />,
    );

    expect(
      screen.getByText(new RegExp(rating.toString(), 'i')),
    ).toBeInTheDocument();

    expect(screen.getByTestId('star')).toBeInTheDocument();
  });
});
