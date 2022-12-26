import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { Reducer } from '~/constants';
import { PostReview } from '~/types';

import { ReviewForm } from './index';

const PAGE_ID = 10;

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useParams: () => ({
      id: PAGE_ID,
    }),
  };
});

jest.mock('~/store', () => {
  const originalModule = jest.requireActual('~/store');

  return {
    ...originalModule,
    reviewSlice: {
      ...originalModule.reviewSlice,
      postReview: (payload: PostReview) => ({
        type: 'MOCK_POST_REVIEW_ACTION',
        payload,
      }),
    },
  };
});

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.Review]: {
    error: null,
  },
});

describe('Component: ReviewRating', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>,
    );

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(
        /Tell how was your stay, what you like and what can be improved/i,
      ),
    ).toBeInTheDocument();

    expect(screen.getAllByTestId('rating-item')).toHaveLength(5);

    expect(
      screen.getByText(/To submit review please make sure to set/i),
    ).toHaveTextContent('50');

    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('should write text when user type it in textarea', async () => {
    render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>,
    );

    expect(screen.queryByDisplayValue(/Some text/i)).not.toBeInTheDocument();

    await userEvent.type(screen.getByTestId('review-textarea'), 'Some text');

    expect(screen.getByDisplayValue(/Some text/i)).toBeInTheDocument();
  });

  it('should change review value when user click on rating', async () => {
    const expectedNoneRadioButtonClicked = [false, false, false, false, false];
    const expectedFirstRadioButtonClicked = [true, false, false, false, false];
    const expectedThirdRadioButtonClicked = [false, false, true, false, false];

    const getRadioButtonElements = (): HTMLInputElement[] => {
      return screen
        .getAllByTestId('rating-item')
        .reverse() as HTMLInputElement[];
    };

    const getValues = () => {
      return getRadioButtonElements().map(({ checked }) => checked);
    };

    render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>,
    );

    expect(getValues()).toEqual(expectedNoneRadioButtonClicked);

    const [firstRadioButtonElement] = getRadioButtonElements();

    await userEvent.click(firstRadioButtonElement);

    expect(getValues()).toEqual(expectedFirstRadioButtonClicked);

    const [, , thirdRadioButtonElement] = getRadioButtonElements();

    await userEvent.click(thirdRadioButtonElement);

    expect(getValues()).toEqual(expectedThirdRadioButtonClicked);
  });

  it('submit button should be active when written comment and setted rating', async () => {
    const comment = Array.from({ length: 50 }, () => 'A').join('');

    render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>,
    );

    expect(screen.getByRole('button')).toBeDisabled();

    const [, , thirdRadioButtonElement] = screen
      .getAllByTestId('rating-item')
      .reverse();

    await userEvent.click(thirdRadioButtonElement);

    expect(screen.getByRole('button')).toBeDisabled();

    await userEvent.type(screen.getByTestId('review-textarea'), comment);

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should submit form', async () => {
    const comment = Array.from({ length: 50 }, () => 'A').join('');

    render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>,
    );

    const [, , thirdRadioButtonElement] = screen
      .getAllByTestId('rating-item')
      .reverse();

    await userEvent.click(thirdRadioButtonElement);
    await userEvent.type(screen.getByTestId('review-textarea'), comment);
    await userEvent.click(screen.getByRole('button'));

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_POST_REVIEW_ACTION',
      payload: {
        id: PAGE_ID,
        comment,
        rating: 3,
      },
    });
  });

  it('should clear submit form', async () => {
    const comment = Array.from({ length: 50 }, () => 'A').join('');

    const getRadioButtonElements = (): HTMLInputElement[] => {
      return screen
        .getAllByTestId('rating-item')
        .reverse() as HTMLInputElement[];
    };

    const getValues = () => {
      return getRadioButtonElements().map(({ checked }) => checked);
    };

    render(
      <Provider store={store}>
        <ReviewForm />
      </Provider>,
    );

    const [, , thirdRadioButtonElement] = screen
      .getAllByTestId('rating-item')
      .reverse();

    await userEvent.click(thirdRadioButtonElement);
    await userEvent.type(screen.getByTestId('review-textarea'), comment);

    expect(screen.getByDisplayValue(comment)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(getValues()).toEqual([false, false, false, false, false]);
    expect(screen.queryByDisplayValue(comment)).not.toBeInTheDocument();
  });
});
