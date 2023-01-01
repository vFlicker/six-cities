import { render, screen, userEvent } from '~/tests';
import { ReviewRating } from './index';

describe('Component: ReviewRating', () => {
  it('should render correctly', () => {
    render(<ReviewRating rating={0} onRatingToggle={jest.fn()} />);
    expect(screen.getAllByTestId('rating-item')).toHaveLength(5);
  });

  it('handleRatingToggle should called 2 times with different arguments', async () => {
    const handleRatingToggle = jest.fn();

    render(<ReviewRating rating={0} onRatingToggle={handleRatingToggle} />);

    const [firstButton, , thirdRadioButton] = screen
      .getAllByTestId('rating-item')
      .reverse();

    await userEvent.click(firstButton);
    await userEvent.click(thirdRadioButton);

    expect(handleRatingToggle).toBeCalledTimes(2);
    expect(handleRatingToggle).toHaveBeenNthCalledWith(1, 1);
    expect(handleRatingToggle).toHaveBeenNthCalledWith(2, 3);
  });
});
