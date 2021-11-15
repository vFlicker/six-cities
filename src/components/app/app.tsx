import React, { PropsWithChildren } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
  reviews: TReview[],
}

function App(props: PropsWithChildren<AppProps>): React.ReactElement {
  const { reviews, offers } = props;

  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.OFFERS}>
          <OfferPage offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
