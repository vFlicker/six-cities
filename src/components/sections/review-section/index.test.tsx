import { Reducer } from '~/constants';
import { render, RenderOptions, reviewStore, screen, userStore } from '~/tests';
import { PostReview } from '~/types';

import { ReviewSection } from './index';

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
      fetchReviews: (payload: number) => ({
        type: 'MOCK_FETCH_REVIEWS_ACTION',
        payload,
      }),
      postReview: (payload: PostReview) => ({
        type: 'MOCK_POST_REVIEW_ACTION',
        payload,
      }),
    },
  };
});

describe('Component: ReviewSection', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Review]: reviewStore.stateWithReviews,
        [Reducer.User]: userStore.authState,
      },
    };

    render(<ReviewSection />, renderOptions);

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

    render(<ReviewSection />, renderOptions);

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

    render(<ReviewSection />, renderOptions);

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

    render(<ReviewSection />, renderOptions);

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

    const { store } = render(<ReviewSection />, renderOptions);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_FETCH_REVIEWS_ACTION',
      payload: PAGE_ID,
    });
  });
});
