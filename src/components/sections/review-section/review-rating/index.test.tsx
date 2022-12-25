import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ReviewRating } from './index';

describe('Component: ReviewRating', () => {
  it('should render correctly', () => {
    render(<ReviewRating rating={5} onRatingToggle={jest.fn()} />);

    expect(screen.getAllByTestId('rating-item')).toHaveLength(5);
  });

  it('handleRatingToggle should called 2 times with different arguments', async () => {
    const handleRatingToggle = jest.fn();

    render(<ReviewRating rating={0} onRatingToggle={handleRatingToggle} />);

    const radioButtonElements = screen.getAllByTestId('rating-item').reverse();

    await userEvent.click(radioButtonElements[0]);
    await userEvent.click(radioButtonElements[2]);

    expect(handleRatingToggle).toBeCalledTimes(2);
    expect(handleRatingToggle).toHaveBeenNthCalledWith(1, 1);
    expect(handleRatingToggle).toHaveBeenNthCalledWith(2, 3);
  });
});
