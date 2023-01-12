import { createHashHistory } from 'history';

import { AppRoute, Reducer } from '~/constants';
import {
  appStore,
  offersStore,
  render,
  RenderOptions,
  screen,
  userStore,
} from '~/tests';

import { App } from './index';

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

    render(<App />, renderOptions);

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

    render(<App />, renderOptions);

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

    const { store } = render(<App />, renderOptions);

    const actionTypes = store.getActions().map(({ type }) => type);
    expect(actionTypes).toEqual([
      'MOCK_FETCH_ALL_OFFERS_ACTION',
      'MOCK_CHECK_AUTH_STATUS_ACTION',
      'MOCK_FETCH_FAVORITE_OFFERS_ACTION',
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

    const { store } = render(<App />, renderOptions);

    const actionTypes = store.getActions().map(({ type }) => type);
    expect(actionTypes).toEqual([
      'MOCK_FETCH_ALL_OFFERS_ACTION',
      'MOCK_CHECK_AUTH_STATUS_ACTION',
    ]);
  });
});
