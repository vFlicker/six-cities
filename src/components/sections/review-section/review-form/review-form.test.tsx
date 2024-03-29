import { Reducer } from '~/constants';
import {
  renderWithProviders,
  RenderOptions,
  screen,
  userEvent,
} from '~/tests/render';
import { initialState } from '~/tests/store/review';

import { ReviewForm } from './review-form';

const MIN_REVIEW_LENGTH = 50;
const PAGE_ID = 10;

const renderOptions: RenderOptions = {
  preloadedState: {
    [Reducer.Review]: initialState,
  },
};

const getRadioButtonElements = (): HTMLInputElement[] => {
  return screen.getAllByTestId('rating-item').reverse() as HTMLInputElement[];
};

const comment = Array.from({ length: MIN_REVIEW_LENGTH }, () => '.').join('');

describe('Component: ReviewRating', () => {
  it('should render correctly', () => {
    renderWithProviders(<ReviewForm />, renderOptions);

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        /Tell how was your stay, what you like and what can be improved/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId('rating-item')).toHaveLength(5);
    expect(
      screen.getByText(/To submit review please make sure to set/i),
    ).toHaveTextContent(MIN_REVIEW_LENGTH.toString());
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('should change review value when user click on rating', async () => {
    const expectedFirstRadioButtonClicked = [true, false, false, false, false];

    const getValues = () => {
      return getRadioButtonElements().map(({ checked }) => checked);
    };

    renderWithProviders(<ReviewForm />, renderOptions);

    const [firstRadioButtonElement] = getRadioButtonElements();

    await userEvent.click(firstRadioButtonElement);

    expect(getValues()).toEqual(expectedFirstRadioButtonClicked);
  });

  it('submit button should be disabled when the form empty', async () => {
    renderWithProviders(<ReviewForm />, renderOptions);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should dispatch postReview and clear form when user click on submit', async () => {
    const { store } = renderWithProviders(<ReviewForm />, renderOptions);

    const [firstRadioButtonElement] = getRadioButtonElements();

    await userEvent.click(firstRadioButtonElement);
    await userEvent.type(screen.getByTestId('review-textarea'), comment);
    await userEvent.click(screen.getByRole('button'));

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_POST_REVIEW_ACTION',
      payload: {
        id: PAGE_ID,
        comment,
        rating: 1,
      },
    });

    expect(screen.queryByDisplayValue(comment)).not.toBeInTheDocument();
  });
});
