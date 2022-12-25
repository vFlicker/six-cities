import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { AuthStatus, FavoriteStatus, Reducer } from '~/constants';
import { ToggleFavoritePayload } from '~/types';
import { makeOffer } from '~/utils';

import { PropertySection } from './index';

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
    reviewSlice: {
      ...originalModule.reviewSlice,
      fetchReviews: () => ({
        type: 'MOCK_FETCH_REVIEWS_ACTION',
      }),
    },
  };
});

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.App]: {
    favoriteIDsInProgress: [],
  },
  [Reducer.Review]: {
    reviews: [],
  },
  [Reducer.User]: {
    authStatus: AuthStatus.NoAuth,
  },
});

const offer = makeOffer({ isPremium: true, isFavorite: true });

describe('Component: PropertySection', () => {
  afterEach(() => {
    store.clearActions();
  });

  it('should render correctly', () => {
    const { images, title } = offer;

    render(
      <Provider store={store}>
        <PropertySection {...offer} />
      </Provider>,
    );

    expect(screen.getAllByAltText('Studio')).toHaveLength(images.length);
    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('handleFavoriteButtonClick should work correctly', async () => {
    render(
      <Provider store={store}>
        <PropertySection {...offer} />
      </Provider>,
    );

    const bookmarkButton = screen.getByRole('button', {
      name: /To bookmarks/i,
    });

    await userEvent.click(bookmarkButton);

    const [firstAction, secondAction] = store.getActions();

    console.log(store.getActions());

    expect(firstAction).toEqual({
      type: 'MOCK_FETCH_REVIEWS_ACTION',
    });

    expect(secondAction).toEqual({
      type: 'MOCK_TOGGLE_FAVORITE_ACTION',
      payload: { id: offer.id, status: FavoriteStatus.Remove },
    });
  });
});
