import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';

import { Reducer } from '~/constants';
import { makeOffer } from '~/utils';

import { HistoryRouter } from '../history-router';
import { CardItem } from './index';

const mockStore = configureMockStore();

const offer = makeOffer({
  isPremium: false,
  price: 999,
  title: 'mock-title',
});

const history = createMemoryHistory();

const store = mockStore({
  [Reducer.App]: {
    favoriteIDsInProgress: [],
  },
});

describe('Component: CardItem', () => {
  it('should render correctly,', () => {
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

    expect(screen.queryByText(/Premium/i)).toBe(null);
    expect(screen.getByText(/999/i));
    expect(screen.getByText(/mock-title/i));
  });

  it('Mark should rendered,', () => {
    const premiumOffer = makeOffer({ isPremium: true });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardItem
            cardType="big"
            offer={premiumOffer}
            onCardItemMouseEnter={jest.fn()}
            onCardItemMouseLeave={jest.fn()}
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Premium/i));
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

    // TODO: we should check handleFavoriteButtonClick
    // const bookmarkButton = screen.getByRole('button', {
    //   name: 'To bookmarks',
    // });
  });
});
