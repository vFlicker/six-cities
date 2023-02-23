import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '~/shared/constants';

import { LoginPage } from './LoginPage';
import { MainPage } from './MainPage';

export function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      {/* TODO: add component */}
      <Route path="*" element={<h1>Not found</h1>} />{' '}
    </Routes>
  );
}