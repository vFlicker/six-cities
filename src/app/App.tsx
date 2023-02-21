import { MainPage } from '~/pages/MainPage';

import { withProviders } from './providers';
import './index.css';

const MainPageWithProviders = withProviders(MainPage);

export function App(): JSX.Element {
  return <MainPageWithProviders />;
}
