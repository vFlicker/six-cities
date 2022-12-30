import { FavoriteStatus, Reducer } from '~/constants';
import {
  appStore,
  offerStore,
  render,
  RenderOptions,
  screen,
  userEvent,
} from '~/tests';
import { ToggleFavoritePayload } from '~/types';

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

const { offer } = offerStore;

const renderOptions: RenderOptions = {
  preloadedState: {
    [Reducer.App]: appStore.initialState,
  },
};

describe('Component: CardItem', () => {
  it('should render correctly', () => {
    const { price, title, type } = offer;

    render(
      <CardItem
        cardType="big"
        offer={offer}
        onCardItemMouseEnter={jest.fn()}
        onCardItemMouseLeave={jest.fn()}
      />,
      renderOptions,
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
      <CardItem
        cardType="big"
        offer={offer}
        onCardItemMouseEnter={handleCardItemMouseEnter}
        onCardItemMouseLeave={handleCardItemMouseLeave}
      />,
      renderOptions,
    );

    const card = screen.getByRole('article');

    await userEvent.hover(card);
    await userEvent.unhover(card);

    expect(handleCardItemMouseEnter).toBeCalledTimes(1);
    expect(handleCardItemMouseLeave).toBeCalledTimes(1);
  });

  it('handleFavoriteButtonClick should work correctly', async () => {
    const { store } = render(
      <CardItem
        cardType="big"
        offer={offer}
        onCardItemMouseEnter={jest.fn()}
        onCardItemMouseLeave={jest.fn()}
      />,
      renderOptions,
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
