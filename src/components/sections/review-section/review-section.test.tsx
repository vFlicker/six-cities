import { Reducer } from '~/constants';
import * as reviewStore from '~/tests/store/review';
import * as userStore from '~/tests/store/user';
import {
  mockPageId,
  renderWithProviders,
  RenderOptions,
  screen,
} from '~/tests/render';

import { ReviewSection } from './review-section';

describe('Component: ReviewSection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Review]: reviewStore.stateWithReviews,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<ReviewSection />, renderOptions);

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });

  it('should not render reviews', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Review]: reviewStore.initialState,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<ReviewSection />, renderOptions);

    expect(screen.queryByText(/Reviews/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });

  it('should not render form', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Review]: reviewStore.stateWithReviews,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    renderWithProviders(<ReviewSection />, renderOptions);

    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
    expect(screen.queryByText(/Your review/i)).not.toBeInTheDocument();
  });

  it('should render ErrorMessage', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Review]: reviewStore.rejectedState,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    renderWithProviders(<ReviewSection />, renderOptions);

    expect(
      screen.getByText(/There are problems, please try again later/i),
    ).toBeInTheDocument();
  });

  it('should dispatch fetchReviews when component has loaded', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Review]: reviewStore.stateWithReviews,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    const { store } = renderWithProviders(<ReviewSection />, renderOptions);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_FETCH_REVIEWS_ACTION',
      payload: mockPageId,
    });
  });
});
