import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '~/constants';

import { PrivateRoute } from '../shared/private-route/private-route';
import { FavoritesPage } from './favorites-page/favorites-page';
import { LoginPage } from './login-page/login-page';
import { MainPage } from './main-page/main-page';
import { NotFoundPage } from './not-found-page/not-found-page';
import { OfferPage } from './offer-page/offer-page';

export function Routing(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route path={AppRoute.Offer} element={<OfferPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
