import { Route, Routes } from 'react-router-dom';

import { AppRoute } from '~/constants';

import { browserHistory } from '../../browser-history';
import { PrivateRoute } from '../shared';
import { HistoryRouter } from '../shared/HistoryRouter';
import { FavoritesPage } from './favorites-page';
import { LoginPage } from './login-page';
import { MainPage } from './main-page';
import { NotFoundPage } from './not-found-page';
import { OfferPage } from './offer-page';

export function Pages(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
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
    </HistoryRouter>
  );
}
