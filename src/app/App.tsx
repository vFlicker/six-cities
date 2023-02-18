import { HashRouter as Router } from 'react-router-dom';

import { MainPage } from '~/pages/MainPage';

import './index.css';

export function App(): JSX.Element {
  return (
    <Router>
      <MainPage />
    </Router>
  );
}
