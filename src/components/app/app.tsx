import React, { PropsWithChildren } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TOffer, TReview } from '../../types';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage
} from '../pages';

type AppProps = {
  offers: TOffer[],
  reviews: TReview[]
}

function App(props: PropsWithChildren<AppProps>): React.ReactElement {
  const { reviews, offers } = props;

  return (
    <Router>
      <Routes>
        <Route path={AppRoute.ROOT} element={<MainPage />} />
        <Route path={AppRoute.FAVORITES} element={<FavoritesPage />} />
        <Route path={AppRoute.LOGIN} element={<LoginPage />} />
        <Route path={AppRoute.OFFERS} element={<OfferPage offers={offers} reviews={reviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
