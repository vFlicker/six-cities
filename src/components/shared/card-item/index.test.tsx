import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { FavoriteStatus, Reducer } from '~/constants';
import { makeOffer } from '~/utils';
import { ToggleFavoritePayload } from '~/store/api-actions/app';

import { HistoryRouter } from '../history-router';
import { CardItem } from './index';

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
  };
});

const mockStore = configureMockStore();

const store = mockStore({
  [Reducer.App]: {
    favoriteIDsInProgress: [],
  },
});

const history = createMemoryHistory();

const offer = makeOffer({ isPremium: true, isFavorite: true });

describe('Component: CardItem', () => {
  it('should render correctly', () => {
    const { price, title, type } = offer;

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardItem
            cardType="big"
            offer={offer}
            onCardItemMouseEnter={jest.fn()}
            onCardItemMouseLeave={jest.fn()}
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Premium/i)).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(price.toString(), 'i')),
    ).toBeInTheDocument();
    expect(screen.getByTestId('star')).toBeInTheDocument();
    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(type, 'i'))).toBeInTheDocument();
  });

  it('mouse move handlers should be called', async () => {
    const handleCardItemMouseEnter = jest.fn();
    const handleCardItemMouseLeave = jest.fn();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardItem
            cardType="big"
            offer={offer}
            onCardItemMouseEnter={handleCardItemMouseEnter}
            onCardItemMouseLeave={handleCardItemMouseLeave}
          />
        </HistoryRouter>
      </Provider>,
    );

    const card = screen.getByRole('article');

    await userEvent.hover(card);

    expect(handleCardItemMouseEnter).toBeCalledTimes(1);

    await userEvent.unhover(card);

    expect(handleCardItemMouseLeave).toBeCalledTimes(1);
  });

  it('handleFavoriteButtonClick should work correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardItem
            cardType="big"
            offer={offer}
            onCardItemMouseEnter={jest.fn()}
            onCardItemMouseLeave={jest.fn()}
          />
        </HistoryRouter>
      </Provider>,
    );

    const bookmarkButton = screen.getByRole('button', {
      name: /To bookmarks/i,
    });

    await userEvent.click(bookmarkButton);

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({
      type: 'MOCK_TOGGLE_FAVORITE_ACTION',
      payload: { id: offer.id, status: FavoriteStatus.Remove },
    });
  });
});
