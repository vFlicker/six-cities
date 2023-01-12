import { Reducer } from '~/constants';
import {
  offersStore,
  renderWithProviders,
  RenderOptions,
  screen,
  userEvent,
  userStore,
} from '~/tests';

import { AuthList } from './auth-list';

describe('Component: AuthList', () => {
  it('should render correctly', () => {
    const favoritesCount =
      offersStore.stateWithOffers.favorites.length.toString();

    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Offers]: offersStore.stateWithOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<AuthList />, renderOptions);

    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByTestId('counter')).toBeInTheDocument();
    expect(screen.getByTestId('counter')).toHaveTextContent(favoritesCount);
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(
      screen.getByText(userStore.authState.user.email),
    ).toBeInTheDocument();
  });

  it('should not render the counter when favorite is empty', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Offers]: offersStore.initialState,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<AuthList />, renderOptions);

    expect(screen.queryByTestId(/counter/i)).not.toBeInTheDocument();
  });

  it('should dispatch logout when click on logout', async () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Offers]: offersStore.initialState,
        [Reducer.User]: userStore.authState,
      },
    };

    const { store } = renderWithProviders(<AuthList />, renderOptions);

    await userEvent.click(screen.getByText(/Sign out/i));

    const [firstAction] = store.getActions();
    expect(firstAction).toEqual({ type: 'MOCK_LOGOUT_ACTION' });
  });
});
