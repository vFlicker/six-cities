import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import {
  FavoritesPage,
  LoginPage,
  MainPage,
  NotFoundPage,
  OfferPage
} from '../pages';

function App(): React.ReactElement {
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
