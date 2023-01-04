import { PreloadedState } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import {
  render,
  RenderOptions as RTKRenderOptions,
} from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { HistoryRouter } from '~/components/shared';
import { AuthData, PostReview, State, ToggleFavoritePayload } from '~/types';

export interface RenderOptions extends Omit<RTKRenderOptions, 'queries'> {
  preloadedState?: PreloadedState<State>;
  history?: MemoryHistory;
}

export const mockPageId = 10;

jest.mock('~/assets/images', () => ({
  pinActiveIconSrc: '~/assets/images/icons/pin-active.svg',
  pinIconSrc: '~/assets/images/icons/pin.svg',
}));

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    ...originalModule,
    useParams: () => ({
      id: mockPageId,
    }),
  };
});

/**
 * Mock all thunks.
 */
jest.mock('~/store', () => {
  const originalModule = jest.requireActual('~/store');

  return {
    ...originalModule,
    appSlice: {
      ...originalModule.appSlice,
      toggleFavorite: (payload: ToggleFavoritePayload) => ({
        type: 'MOCK_TOGGLE_FAVORITE_ACTION',
        payload,
      }),
    },
    offerSlice: {
      ...originalModule.offerSlice,
      fetchOffer: (id: number) => ({
        type: 'MOCK_FETCH_OFFER_ACTION',
        payload: id,
      }),
    },
    offersSlice: {
      ...originalModule.offersSlice,
      fetchOffersNearby: (id: number) => ({
        type: 'MOCK_FETCH_OFFERS_NEARBY_ACTION',
        payload: id,
      }),
    },
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
    userSlice: {
      ...originalModule.userSlice,
      login: (payload: AuthData) => ({
        type: 'MOCK_LOGIN_ACTION',
        payload,
      }),
      logout: () => ({ type: 'MOCK_LOGOUT_ACTION' }),
    },
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const renderWithProviders = (
  ui: ReactElement,
  {
    history = createMemoryHistory(),
    preloadedState = {},
    ...renderOptions
  }: RenderOptions = {},
) => {
  const mockStore = configureMockStore();
  const store = mockStore(preloadedState);

  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        <HistoryRouter history={history}>{children}</HistoryRouter>
      </Provider>
    );
  }
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { renderWithProviders as render };
