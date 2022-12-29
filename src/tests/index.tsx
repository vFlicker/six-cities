import { PreloadedState } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import { render, RenderOptions } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { HistoryRouter } from '~/components/shared';
import { State } from '~/types';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<State>;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const renderWithProviders = (
  ui: ReactElement,
  { preloadedState = {}, ...renderOptions }: ExtendedRenderOptions = {},
) => {
  const mockStore = configureMockStore();
  const store = mockStore(preloadedState);
  const history = createMemoryHistory();

  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        <HistoryRouter history={history}>{children}</HistoryRouter>
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
export { renderWithProviders as render };
