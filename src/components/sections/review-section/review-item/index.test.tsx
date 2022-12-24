import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { makeReview } from '~/utils';

import { ReviewItem } from './index';

const review = makeReview({ date: new Date('2022-06-02T10:21:00.051Z') });

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const { comment, user } = review;
    const { name } = user;

    render(<ReviewItem {...review} />);

    expect(screen.getByAltText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(name, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(comment, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/June 2022/i)).toBeInTheDocument();
  });
});
