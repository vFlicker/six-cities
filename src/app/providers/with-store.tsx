import { Provider } from 'react-redux';

import { store } from '../store';
import { Component } from './types';

export const withStore = (component: Component): Component => {
  function WithStore(): JSX.Element {
    return <Provider store={store}>{component()}</Provider>;
  }

  return WithStore;
};
