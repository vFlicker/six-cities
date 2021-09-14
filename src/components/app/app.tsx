import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { IOffer } from '../../interfaces';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage
} from '../pages';

interface AppProps {
  offers: IOffer[]
}

function App(props: AppProps): React.ReactElement {
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
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
