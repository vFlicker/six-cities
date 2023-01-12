import { renderWithProviders, screen } from '~/tests';
import { makeReview } from '~/utils';

import { ReviewItem } from './review-item';

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const review = makeReview({ date: new Date('2022-06-02T10:21:00.051Z') });
    const { comment, user } = review;
    const { name } = user;

    renderWithProviders(<ReviewItem {...review} />);

    expect(screen.getByAltText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(comment, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/June 2022/i)).toBeInTheDocument();
  });
});
