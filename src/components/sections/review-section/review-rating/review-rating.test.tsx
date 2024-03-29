import { renderWithProviders, screen, userEvent } from '~/tests/render';
import { ReviewRating } from './review-rating';

describe('Component: ReviewRating', () => {
  it('should render correctly', () => {
    renderWithProviders(<ReviewRating rating={0} onRatingToggle={jest.fn()} />);
    expect(screen.getAllByTestId('rating-item')).toHaveLength(5);
  });

  it('handleRatingToggle should called 2 times with different arguments', async () => {
    const handleRatingToggle = jest.fn();

    renderWithProviders(
      <ReviewRating rating={0} onRatingToggle={handleRatingToggle} />,
    );

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
