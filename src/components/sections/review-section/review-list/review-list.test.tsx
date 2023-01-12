import { renderWithProviders, reviewStore, screen } from '~/tests';

import { ReviewList } from './review-list';

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const { reviews } = reviewStore.stateWithReviews;
    const reviewCount = reviews.length;

    renderWithProviders(<ReviewList reviews={reviews} />);

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toHaveTextContent(
      reviewCount.toString(),
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(reviewCount);
  });

  it('should not render', () => {
    renderWithProviders(<ReviewList reviews={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
