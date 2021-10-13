import React, { PropsWithChildren } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { OfferListItem } from '../../types';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage
} from '../pages';

type AppProps = {
  offers: OfferListItem[]
}

function App(props: PropsWithChildren<AppProps>): React.ReactElement {
  const { offers } = props;

  return (
    <Router>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.OFFERS}>
          <OfferPage offers={offers} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
