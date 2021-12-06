import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AppRoute } from '../../const';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage,
} from '../pages';
import PrivateRoute from '../private-route';
import { TOffers } from '../../types/offer';
import { TReviews } from '../../types/review';

type AppProps = {
  offers: TOffers;
  reviews: TReviews;
};

function App(props: AppProps): JSX.Element {
  const { reviews, offers } = props;

  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route
          path={AppRoute.Favorites}
          element={(
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
        )}
        />
        <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Offers} element={<OfferPage offers={offers} reviews={reviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
