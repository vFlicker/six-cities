import { createHashHistory } from 'history';

import { AppRoute, Reducer } from '~/constants';
import { changeCityName } from '~/store/slices/app/slice';
import * as appStore from '~/tests/store/app';
import * as offersStore from '~/tests/store/offers';
import * as userStore from '~/tests/store/user';
import { renderWithProviders, RenderOptions, screen } from '~/tests/render';

import { App } from './app';

const history = createHashHistory();

describe('Component: App', () => {
  it('should render correctly', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWitUpdatedOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    history.push(AppRoute.Root);

    renderWithProviders(<App />, renderOptions);

    expect(screen.getByText('Places')).toBeInTheDocument();
    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
  });

  it('should render Loader', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWitUpdatedOffers,
        [Reducer.User]: userStore.loadingState,
      },
    };

    history.push(AppRoute.Root);

    renderWithProviders(<App />, renderOptions);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('should fetch favorites', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWitUpdatedOffers,
        [Reducer.User]: userStore.authState,
      },
    };

    history.push(AppRoute.Root);

    const { store } = renderWithProviders(<App />, renderOptions);

    const actionTypes = store.getActions().map(({ type }) => type);
    expect(actionTypes).toEqual([
      'MOCK_FETCH_ALL_OFFERS_ACTION',
      'MOCK_CHECK_AUTH_STATUS_ACTION',
      'MOCK_FETCH_FAVORITE_OFFERS_ACTION',
      changeCityName.type,
    ]);
  });

  it('should not fetch favorites', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.App]: appStore.initialState,
        [Reducer.Offers]: offersStore.stateWitUpdatedOffers,
        [Reducer.User]: userStore.noAuthState,
      },
    };

    history.push(AppRoute.Root);

    const { store } = renderWithProviders(<App />, renderOptions);

    const actionTypes = store.getActions().map(({ type }) => type);
    expect(actionTypes).toEqual([
      'MOCK_FETCH_ALL_OFFERS_ACTION',
      'MOCK_CHECK_AUTH_STATUS_ACTION',
      changeCityName.type,
    ]);
  });
});
