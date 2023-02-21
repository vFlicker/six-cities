import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { MainPage } from '~/pages/MainPage';

import { store } from './store';
import './index.css';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router>
        <MainPage />
      </Router>
    </Provider>
  );
}
