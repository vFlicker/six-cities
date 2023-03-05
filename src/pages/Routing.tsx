import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '~/entities/user';
import { AppRoute } from '~/shared/constants';

import { LoginPage } from './LoginPage';
import { MainPage } from './MainPage';

export function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<MainPage />} />
      <Route path={AppRoute.LOGIN} element={<LoginPage />} />
      <Route
        path={AppRoute.FAVORITES}
        element={
          <PrivateRoute>
            <h1>Favorite</h1>
          </PrivateRoute>
        }
      />
      {/* TODO: add component */}
      <Route path="*" element={<h1>Not found</h1>} />{' '}
    </Routes>
  );
}
