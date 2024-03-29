import { PreloadedState } from '@reduxjs/toolkit';
import { HashRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import {
  render,
  RenderOptions as RTKRenderOptions,
} from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { State } from '~/types/store';
import { ToggleFavoritePayload } from '~/types/offer';
import { PostReview } from '~/types/review';
import { AuthData } from '~/types/user';

export interface RenderOptions extends Omit<RTKRenderOptions, 'queries'> {
  preloadedState?: PreloadedState<State>;
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

jest.mock('~/store/slices/app/slice', () => {
  const originalModule = jest.requireActual('~/store/slices/app/slice');

  return {
    ...originalModule,
    toggleFavorite: (payload: ToggleFavoritePayload) => ({
      type: 'MOCK_TOGGLE_FAVORITE_ACTION',
      payload,
    }),
  };
});

jest.mock('~/store/slices/offer/slice', () => {
  const originalModule = jest.requireActual('~/store/slices/offer/slice');

  return {
    ...originalModule,
    fetchOffer: (id: number) => ({
      type: 'MOCK_FETCH_OFFER_ACTION',
      payload: id,
    }),
  };
});

jest.mock('~/store/slices/offers/slice', () => {
  const originalModule = jest.requireActual('~/store/slices/offers/slice');

  return {
    ...originalModule,
    fetchAllOffers: () => ({
      type: 'MOCK_FETCH_ALL_OFFERS_ACTION',
    }),
    fetchFavoriteOffers: (id: number) => ({
      type: 'MOCK_FETCH_FAVORITE_OFFERS_ACTION',
      payload: id,
    }),
    fetchOffersNearby: (id: number) => ({
      type: 'MOCK_FETCH_OFFERS_NEARBY_ACTION',
      payload: id,
    }),
  };
});

jest.mock('~/store/slices/review/slice', () => {
  const originalModule = jest.requireActual('~/store/slices/review/slice');

  return {
    ...originalModule,
    fetchReviews: (payload: number) => ({
      type: 'MOCK_FETCH_REVIEWS_ACTION',
      payload,
    }),
    postReview: (payload: PostReview) => ({
      type: 'MOCK_POST_REVIEW_ACTION',
      payload,
    }),
  };
});

jest.mock('~/store/slices/user/slice', () => {
  const originalModule = jest.requireActual('~/store/slices/user/slice');

  return {
    ...originalModule,
    checkAuthStatus: () => ({
      type: 'MOCK_CHECK_AUTH_STATUS_ACTION',
    }),
    login: (payload: AuthData) => ({
      type: 'MOCK_LOGIN_ACTION',
      payload,
    }),
    logout: () => ({ type: 'MOCK_LOGOUT_ACTION' }),
  };
});

afterEach(() => {
  jest.restoreAllMocks();
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const renderWithProviders = (
  ui: ReactElement,
  { preloadedState = {}, ...renderOptions }: RenderOptions = {},
) => {
  const mockStore = configureMockStore();
  const store = mockStore(preloadedState);

  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        <HashRouter>{children}</HashRouter>
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
