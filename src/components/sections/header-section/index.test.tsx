import { Reducer } from '~/constants';
import {
  offersStore,
  renderWithProviders,
  RenderOptions,
  screen,
  userStore,
} from '~/tests';

import { HeaderSection } from './index';

describe('Component: HeaderSection', () => {
  it('should render NoAuthList when user is unauthorized', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.User]: userStore.noAuthState,
      },
    };

    renderWithProviders(<HeaderSection />, renderOptions);

    expect(screen.queryByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should render AuthList when user is authorized', () => {
    const renderOptions: RenderOptions = {
      preloadedState: {
        [Reducer.Offers]: offersStore.initialState,
        [Reducer.User]: userStore.authState,
      },
    };

    renderWithProviders(<HeaderSection />, renderOptions);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });
});
