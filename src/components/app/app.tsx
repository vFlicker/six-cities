import React, { PropsWithChildren } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferListItem, ReviewsListItem } from '../../types';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage
} from '../pages';

type AppProps = {
  offers: OfferListItem[],
  reviews: ReviewsListItem[],
}

function App(props: PropsWithChildren<AppProps>): React.ReactElement {
  const { reviews, offers } = props;

  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offers={offers} />
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
