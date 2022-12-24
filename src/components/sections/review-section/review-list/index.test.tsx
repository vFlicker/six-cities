import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { makeReview } from '~/utils';

import { ReviewList } from './index';

const reviews = [makeReview(), makeReview(), makeReview()];

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const { comment } = reviews[0];

    render(<ReviewList reviews={reviews} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(reviews.length);
    expect(screen.getByText(new RegExp(comment))).toBeInTheDocument();
  });
});
