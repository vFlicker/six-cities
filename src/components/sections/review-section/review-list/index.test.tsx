import { render, reviewStore, screen } from '~/tests';

import { ReviewList } from './index';

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const { reviews } = reviewStore.stateWithReviews;
    const reviewCount = reviews.length;

    render(<ReviewList reviews={reviews} />);

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toHaveTextContent(
      reviewCount.toString(),
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(reviewCount);
  });

  it('should not render', () => {
    render(<ReviewList reviews={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
