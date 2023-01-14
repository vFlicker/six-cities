import { FavoriteStatus, Reducer } from '~/constants';
import * as appStore from '~/tests/store/app';
import * as offerStore from '~/tests/store/offer';
import * as reviewStore from '~/tests/store/review';
import * as userStore from '~/tests/store/user';
import {
  mockPageId,
  renderWithProviders,
  RenderOptions,
  screen,
  userEvent,
} from '~/tests/render';

import { PropertySection } from './property-section';

const { offer } = offerStore.stateWithOffer;

const renderOptions: RenderOptions = {
  preloadedState: {
    [Reducer.App]: appStore.initialState,
    [Reducer.Review]: reviewStore.stateWithReviews,
    [Reducer.User]: userStore.noAuthState,
  },
};

describe('Component: PropertySection', () => {
  it('should render correctly', () => {
    const { images, title } = offer;

    renderWithProviders(<PropertySection {...offer} />, renderOptions);

    expect(screen.getAllByAltText('Studio')).toHaveLength(images.length);
    expect(screen.getByText(new RegExp(title, 'i'))).toBeInTheDocument();
    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it('should dispatch fetchReviews when component loaded', async () => {
    const { store } = renderWithProviders(
      <PropertySection {...offer} />,
      renderOptions,
    );

    const [firstAction] = store.getActions();

    expect(firstAction).toEqual({
      type: 'MOCK_FETCH_REVIEWS_ACTION',
      payload: mockPageId,
    });
  });

  it('should dispatch toggleFavorite when click on button "To bookmark"', async () => {
    const { store } = renderWithProviders(
      <PropertySection {...offer} />,
      renderOptions,
    );

    const bookmarkButton = screen.getByRole('button', {
      name: /To bookmarks/i,
    });

    await userEvent.click(bookmarkButton);

    const [, secondAction] = store.getActions();

    expect(secondAction).toEqual({
      type: 'MOCK_TOGGLE_FAVORITE_ACTION',
      payload: { id: offer.id, status: FavoriteStatus.Remove },
    });
  });
});
